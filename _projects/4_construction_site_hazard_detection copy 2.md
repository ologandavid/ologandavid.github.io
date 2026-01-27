---
layout: page
title: Construction Site Hazard Detection
description: 24.678 Computer Vision for Engineers (Fall 2022)
img: assets/img/24.678/sitegif2.gif
importance: 1
category: Graduate
related_publications: true
---

Objective:
As a student in 24.695, CMU’s Control Theory class, I was assigned the challenge of creating an efficient controller and estimator for a small self-driving vehicle. Given the projected expansion of the driverless car industry to reach 93 billion by 2028, this project is geared towards
addressing that growth. For this project, we drew inspiration from <a href="https://www.cmu.edu/buggy/">CMU’s yearly buggy competition</a> for our track design and developed an optimal controller for the car.

Solution:

 <!-- <span class="image right"><img src="images/24.695/bicycle.png" alt="" /></span> -->
To approximate the motion of the car, a simple bicycle model was used to define system dynamics. The
car is modeled as a two wheeled vehicle with two degrees of freedom described by its longitudinal
and lateral dynamics. As such, I designed a two-part controller that generates control commands
including desired steering angle δ and longitudinal force f.
Given a desired trajectory of waypoints, I implemented a:

<!-- 
<ol>
<li>PID Controller</li>
<li>State Feedback Controller</li>
<li>LQR Controller</li>
<li>MPC Controller</li>
</ol> -->

To optimize the performance of the PID controller, I tuned the associated proportional, derivative,
and integral gains. For the static LQR controller, I discretized the continuous error dynamics of
the nonlinear system using a zero order hold, and then designed an infinite horizon LQR controller
for the system. Similarly, to implement the MPC, I implemented an iterative finite horizon LQR for a
tunable horizon size N in the future. Ultimately, the controller was able to get the buggy to
accelerate on the straight portions of the track, while slowing accordingly for turns.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
