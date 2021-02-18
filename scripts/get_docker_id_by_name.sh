#!/bin/sh

var docker_name = $1
var docker_id = docker ps -a | grep "$docker_name"

echo docker_id;
