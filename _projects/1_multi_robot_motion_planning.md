---
layout: page
title: Multi-Robot Motion Planning for Quadruped Robots
description: 16.782 Planning and Decision Making in Robotics (Fall 2023)
img: assets/img/16.782/4robot.gif
importance: 1
category: Graduate
related_publications: true
---

Objective:
As a student in 16.782, my team and I decided to tackle the challenge of motion planning for multiple robotic agents in complex environments. Especially as robotics continues to expand into areas like search and rescue, exploration, and warehousing, the desire for autonomous robots capable of performing collision free coordinated tasks has noticeably escalated. Given my current research in quadruped robots and the unique mobility the platform provides, I decided it would be interesting to employ a variety of multi-agent planning strategies to see which performed best.

Solution:
To implement each planner, we leveraged Quad-SDK, my lab’s ROS-based framework for quadrupedal locomotion. By incorporating its suite of visualization tools, local footstep planner, and low-level motor controller, we were able to seamlessly integrate and test our planner performance on a variety of terrain. For each sampling-based planner, the representation of discrete time robot states is defined as a vector of robot body position, orientation and velocity. For the body of the project, my team and I explored three main motion planning algorithms.

Sequential RRT-Connect (Rapidly Exploring Random Trees)
Joint Space RRT-Connect
Conflict Based Search

The Sequential RRT-Connect operates by successively solving a path for each robot. By treating all prior paths as static obstacles and independently planning for each robot, we reduce the computational complexity of the process, improving speed, but at the sacrifice probabilistic completeness. The Joint Space RRT-Connect considers all robots simultaneously and solves for a trajectory in the joint state space of all robots. This approach is more comprehensive, and maintains completeness but scales poorly do to the increased state complexity. Finally, the CBS acts as the middle ground, planning for each robot individually using a low level RRT-Connect, while identifying and resolving path conflicts as they appear in its high-level search. This method aims to combine the best of both worlds, taking advantage of the individuality of the sequential RRT, and only solving the joint space problem when necessary. Throughout the project, my main responsibilities included implementing and testing the conflict-based search, as well as onboarding my teammates on the codebase and debugging any errors they might encounter.

Results:
We demonstrated the success of each method using simulation tests conducted in Gazebo and Rviz. For validity, the number of agents was set to two, but later extended to four to see how each method scales. In each scenario, we show that the planner can compute kino-dynamically feasible, collision free body trajectories for multiple robots over a number of randomly generated trial environments. The results are shown in the table below.

Ultimately, as expected the sequential planner was the quickest, but often output suboptimal paths, and would often fail when subsequent robots became over constrained. The joint planner performed better, and allowed for crossing paths, but this often resulted in longer solve times. On average, the CBS performed best, with a shorter average path length and a decent average planning time.

The results demonstrate the importance of application specific planners, particularly for implementations where tradeoffs can be made on speed, computational complexity, completeness, and efficiency. CBS remains the most versatile approach, but the overall project highlights the continued need for scalable solutions to real world multi-agent motion planning.

Applied Skills: C++, ROS, Gazebo, RRT, Conflict Based Search, Multi-Robot Motion Planning

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
