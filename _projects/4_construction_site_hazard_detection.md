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
While taking CMU’s 24.678, my team and I decided to apply traditional computer vision techniques to
tackle the growing incidence rates of fatal injuries on construction sites nationwide. As the number
of such injuries has risen by nearly 90% in the last three years, my team devised a method to improve
worker awareness and safety on job sites, maximizing company profits and reducing worker
downtime.

<b>Solution:</b>
My team developed a system that combines image processing and point cloud-based computer vision
methods to track the movement of workers around construction sites and notify them when they enter
potentially dangerous regions. For simplicity, we targeted the most common construction site hazard,
workers being struck by falling objects. Ideally, we’d like this technology to allow us to prevent
some of the accidents we see every year.

To solve this problem, we propose a multistep method. First, we preprocess our worksite by
selecting four fixed reference points in the camera’s field of view. Given a video stream of the
worksite, we need a reliable way to make worker positions in the image to worker positions in space.
To do this, we operate under the assumption that the camera position is fixed, and all workers are
on the same plane (the ground). This allows us to generate a static transformation that maps pixel
values to world coordinate values (assuming the worksite shape and dimensions are known). This
allows
us to account for the unique perspective of our camera and generate the respective transformation
matrix.
<!-- <div class="box alt">
<div class="row gtr-uniform">
    <div class="col-3"></div>
    <div class="col-6"><span class="image fit"><img src="images/24.678/network.png" alt="" /></span>
    </div>
    <div class="col-3"></div>
</div>
</div> -->
Subsequently, we segment our video stream into individual frames that our YOLOv7 network can
process. Transfer learning was done to refine the performance of the network on our construction
site dataset. Using YOLO for object detection, we can identify workers in each image, and output a
corresponding object bounding box. Given the pixel values for the center of the bounding box, we can
extract the workers position by average the bottom of the box.
<!-- <div class="box alt">
<div class="row gtr-uniform">
    <div class="col-3"></div>
    <div class="col-6"><span class="image fit"><img src="images/24.678/Picture2.png"
                alt="" /></span></div>
    <div class="col-3"></div>
</div>
</div> -->
Using our predefined transformation matrix, we can map video coordinates to world coordinates, and
generate a map of worker positions for each frame. These coordinates are also scaled by the size our
output frame and boundary. Each frame is then stitched together to create an animation that
describes worker position progression over time. For our simulation, we predefine danger areas,
although a network can be trained to identify risky or potentially dangerous objects.

<b>Results:</b>
For a quick representation of worker position, we plotted their location from a birds-eye view, In
the future, we plan to generate a more comprehensive representation of worker position, perhaps
incorporating velocities or making predictions about future worker behavior. Extending the method to
work with multiple cameras and occlusions also remains future work. Ultimately, we were able to
successfully track the location of each worker in a variety of environments.

<!-- <div class="box alt">
<div class="row gtr-uniform">
    <div class="col-6"><span class="vid fit"><video width="640" height="480" controls>
                <source src="images/24.678/test4.mp4" type="video/mp4">
            </video></span></div>
    <div class="col-6"><span class="vid fit"><video width="640" height="480" controls>
                <source src="images/24.678/vid3.mp4" type="video/mp4">
            </video></span></div>
</div>
</div> -->

<b>Applied Skills: OpenCV, Python, Coordinate Transformations, Object Detection, Transfer Learning</b>
