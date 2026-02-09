---
layout: page
title: Optimal Controllers for an Autonomous Buggy
description: 24.695 Modern Control Theory (Fall 2022)
img: assets/img/24.695/Picture1.jpg
importance: 1
category: graduate
related_publications: false
---
<b>Objective:</b>
As a student in 24.695, CMU’s Control Theory class, I was assigned the challenge of creating an
efficient controller and estimator for a small self-driving vehicle. Given the projected expansion
of the driverless car industry to reach 93 billion by 2028, this project is geared towards
addressing that growth. For this project, we drew inspiration from <a href="https://www.cmu.edu/buggy/"> CMU’s yearly buggy competition</a> for our track design and developed an optimal controller for the car.

<b>Solution:</b>
<!-- br> <span class="image right"><img src="images/24.695/bicycle.png" alt="" /></span> -->
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
<!-- <div class="box alt">
    <div class="row gtr-uniform">
        <div class="col-5"><span class="image fit"><img src="images/24.695/track.png" alt="" /></span>
        </div>
        <div class="col-6"><span class="vid fit"><video controls>
                    <source src="images/24.695/1080.mp4" type="video/mp4">
                </video></span></div>
    </div>
</div> -->
In the event that localization information is missing from GPS, autonomous cars often use CV/LIDAR
based methods for obstacle avoidance. In an effort to incorporate this into our model, I implemented
EKF SLAM, a sensor fusion method used to augment our position estimate with local measurements.

Taking advantage range and bearing measurements to the next waypoint, the buggy was able to maintain
a stable estimate of position and heading over the entire track.

<b>Results:</b>
To assess the performance of our simulation, we tested the model on a track modeled after CMU’s
buggy course. Driving simulations were then performed using Webots software. The model was able to
complete the track in under 120 seconds and had an average deviation of less than 3 meters from the
optimal tracked path.
<!-- <div class="box alt">
    <div class="row gtr-uniform">
        <div class="col-6"><span class="image fit"><img src="images/24.695/LQR_Figure_1.png"
                    alt="" /></span></div>
        <div class="col-5"><span class="image fit"><img src="images/24.695/Figure_1.png"
                    alt="" /></span></div>
    </div>
</div> -->
This performance was substantially better than the real-world buggy raced every year at CMU. By the
end of the course, each controller design was able to clear desired performance evaluations.

<b>Applied Skills:</b> Python, Webots, Extended Kalman Filter SLAM, MPC, LQR, State Feedback, PID
