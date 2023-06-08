provider "aws" {
  region = "us-east-1" # Replace with your desired AWS region
}

# Create VPC
resource "aws_vpc" "my_vpc" {
  cidr_block = "10.0.0.0/16" # Replace with your desired VPC CIDR block

  tags = {
    Name = "my-vpc" # Replace with your desired VPC name
  }
}

# Create public subnet 1
resource "aws_subnet" "public_subnet_1" {
  vpc_id                  = aws_vpc.my_vpc.id
  cidr_block              = "10.0.1.0/24" # Replace with your desired public subnet CIDR block for subnet 1
  availability_zone       = "us-east-1a"  # Replace with your desired availability zone for subnet 1
  map_public_ip_on_launch = true

  tags = {
    Name = "my-public-subnet-1" # Replace with your desired public subnet name for subnet 1
  }
}

# Create public subnet 2
resource "aws_subnet" "public_subnet_2" {
  vpc_id                  = aws_vpc.my_vpc.id
  cidr_block              = "10.0.2.0/24" # Replace with your desired public subnet CIDR block for subnet 2
  availability_zone       = "us-east-1b"  # Replace with your desired availability zone for subnet 2
  map_public_ip_on_launch = true

  tags = {
    Name = "my-public-subnet-2" # Replace with your desired public subnet name for subnet 2
  }
}


# Create internet gateway
resource "aws_internet_gateway" "my_igw" {
  vpc_id = aws_vpc.my_vpc.id

  tags = {
    Name = "my-internet-gateway" # Replace with your desired internet gateway name
  }
}

# Attach internet gateway to VPC
resource "aws_vpc_attachment" "my_attachment" {
  vpc_id              = aws_vpc.my_vpc.id
  internet_gateway_id = aws_internet_gateway.my_igw.id
}

# Create ECS cluster
resource "aws_ecs_cluster" "my_cluster" {
  name = "my-ecs-cluster" # Replace with your desired ECS cluster name
}

# Create ECS service for public subnet 1
resource "aws_ecs_service" "my_service" {
  name             = "my-ecs-service" # Replace with your desired ECS service name
  cluster          = aws_ecs_cluster.my_cluster.id
  task_definition  = aws_ecs_task_definition.my_task_definition.arn
  desired_count    = 2 # Replace with your desired number of desired tasks
  launch_type      = "FARGATE"
  platform_version = "LATEST"

  network_configuration {
    subnets          = [aws_subnet.public_subnet_1.id] # Specify the subnet ID
    assign_public_ip = true
  }
}

# Create ECS service for public subnet 2
resource "aws_ecs_service" "my_service" {
  name             = "my-ecs-service" # Replace with your desired ECS service name
  cluster          = aws_ecs_cluster.my_cluster.id
  task_definition  = aws_ecs_task_definition.my_task_definition.arn
  desired_count    = 2 # Replace with your desired number of desired tasks
  launch_type      = "FARGATE"
  platform_version = "LATEST"

  network_configuration {
    subnets          = [aws_subnet.public_subnet_2.id] # Specify the subnet ID
    assign_public_ip = true
  }
}

resource "aws_iam_role" "task_role" {
  name = "my-ecs-task-role" # Replace with your desired task role name

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "ecs-tasks.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

# Define the ECS task definition
resource "aws_ecs_task_definition" "my_task_definition" {
  family             = "my-task-family" # Replace with your desired task family name
  execution_role_arn = aws_iam_role.task_execution_role.arn
  task_role_arn      = aws_iam_role.task_role.arn
  network_mode       = "awsvpc"

  # Define container definitions for your task
  container_definitions = <<EOF
[
  {
    "name": "my-container",
    "image": "${aws_ecr_repository.my_repository.repository_url}:${aws_ecr_repository.my_repository.image_tag}",
    "memoryReservation": 512,
    "portMappings": [
      {
        "containerPort": 80,
        "protocol": "tcp"
      }
    ],
    "essential": true
  }
]
EOF

}

# Create Application Load Balancer
resource "aws_lb" "my_load_balancer" {
  name               = "my-load-balancer" # Replace with your desired load balancer name
  load_balancer_type = "application"
  subnets            = [aws_subnet.public_subnet.id] # Specify the subnet ID(s) where the load balancer should be placed

  security_groups = [aws_security_group.lb_security_group.id] # Specify the security group ID(s) for the load balancer

  tags = {
    Name = "my-load-balancer" # Replace with your desired load balancer name
  }
}

# Create Security Group for Load Balancer
resource "aws_security_group" "lb_security_group" {
  name        = "my-lb-security-group" # Replace with your desired security group name
  description = "Security group for load balancer"

  vpc_id = aws_vpc.my_vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Replace with the allowed source IP addresses or range
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Create Listener for Load Balancer
resource "aws_lb_listener" "my_listener" {
  load_balancer_arn = aws_lb.my_load_balancer.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.my_target_group.arn
  }
}

# Create Target Group for Load Balancer
resource "aws_lb_target_group" "my_target_group" {
  name        = "my-target-group" # Replace with your desired target group name
  port        = 80
  protocol    = "HTTP"
  target_type = "ip"

  vpc_id = aws_vpc.my_vpc.id

  health_check {
    path                = "/"
    port                = "traffic-port"
    protocol            = "HTTP"
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 3
    interval            = 30
  }
}
