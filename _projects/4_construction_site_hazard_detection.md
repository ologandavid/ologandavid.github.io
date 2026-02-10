---
layout: page
title: Construction Site Hazard Detection
description: 24.678 Computer Vision for Engineers (Fall 2022)
img: assets/img/24.678/sitegif2.gif
importance: 1
category: graduate
related_publications: false
---

<b>Objective:</b>
As a student in 24.695, CMU’s Control Theory class, I was assigned the challenge of creating an efficient controller and estimator for a small self-driving vehicle. Given the projected expansion of the driverless car industry to reach 93 billion by 2028, this project is geared towards
addressing that growth. For this project, we drew inspiration from <a href="https://www.cmu.edu/buggy/">CMU’s yearly buggy competition</a> for our track design and developed an optimal controller for the car.

<b>Solution:</b>
 <!-- <span class="image right"><img src="images/24.695/bicycle.png" alt="" /></span> -->
To approximate the motion of the car, a simple bicycle model was used to define system dynamics. The
car is modeled as a two wheeled vehicle with two degrees of freedom described by its longitudinal
and lateral dynamics. As such, I designed a two-part controller that generates control commands
including desired steering angle δ and longitudinal force f.
Given a desired trajectory of waypoints, I implemented a:

<ol>
    <li>PID Controller</li>
    <li>State Feedback Controller</li>
    <li>LQR Controller</li>
    <li>MPC Controller</li>
</ol>

To optimize the performance of the PID controller, I tuned the associated proportional, derivative,
and integral gains. For the static LQR controller, I discretized the continuous error dynamics of
the nonlinear system using a zero order hold, and then designed an infinite horizon LQR controller
for the system. Similarly, to implement the MPC, I implemented an iterative finite horizon LQR for a
tunable horizon size N in the future. Ultimately, the controller was able to get the buggy to
accelerate on the straight portions of the track, while slowing accordingly for turns.

<b>Applied Skills:</b> OpenCV, Python, Coordinate Transformations, Object Detection, Transfer Learning