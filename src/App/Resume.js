import React, { Component } from 'react';
import '../App.css';

class Resume extends Component{
  render(){
    return(
      <div>
          <div class="container jumbotron">
              <h1 class="display-4 text-center" >Mallikarjun Gajji</h1>
              <div class="row align-items-start">
                <div class="col">
                    Bangalore, India
                </div>
                <div class="col text-right">
                  Github:
                </div>
                <div class="col">
                  <a href="https://github.com/iammallik" target="_blank">https://github.com/iammallik</a>
                </div>
                </div>
                <div class="row align-items-start">
                    <div class="col">
                        (+91) 95383 08127
                    </div>
                    <div class="col text-right">
                        LinkedIn:
                    </div>
                    <div class="col">
                        <a href="https://www.linkedin.com/in/mallikarjun7" target="_blank">www.linkedin.com/in/mallikarjun7</a>
                    </div>
                </div>
                <div class="row align-items-start">
                    <div class="col glyphicon glyphicon-thumbs-up">
                        IamTheMallik@gmail.com
                    </div>
                    <div class="col text-right">
                        Education:
                    </div>
                    <div class="col">
                        <a href="http://www.iitg.ac.in/" target="_blank">B.Tech, IIT Guwahati</a>
                    </div>
                </div>
                {/**/}
            <hr class="my-4"></hr>
            <h2>Summary</h2>
            <p>Enthusiastic​ software engineer having experience of 2.5+ years in Go, NodeJs,
             Android and I love learning new technologies.</p>
            <hr class="my-4"></hr>
            <h2>Technical Skills</h2>

            <ul>
                <li><strong>Programming Languages:</strong> Java, Golang, Python, C++, Javascript</li>
                <li><strong>Front-End Technologies​:</strong> CSS, HTML, JQuery, ReactJs</li>
                <li><strong>Database Query Languages:</strong> MongoDB (NoSql), Postgres, MySql, SQLite</li>
                <li><strong>Deployment Environments:</strong> Heroku, Kubernetes, Amazon Kinesis</li>
                <li><strong>Other Technologies:</strong> NodeJs, Android, Docker, Redis, Linux, TDD</li>
            </ul>

            <hr class="my-4"></hr>
            <h2>Experience</h2>
            <ul>
                <h4>Iamplus Electronics India pvt Ltd, Bangalore <small class="text-muted"> - Software Engineer</small></h4>
                <h5>Sep 2015 - Present <small class="text-muted">(2 Years 8 months)</small></h5>
            </ul>
            <h3>Projects</h3>

            <ul>
            <h3>Reservation Skill <small class="text-muted">(Feb’18 - now) </small></h3>
            <p>This web app saves the request received from client to a database and forwards
                same request to Ares web app. Now Ares web app calls to the restaurant and
                gives back status of the booking request to the skill. Based on the status,
                Reservation skill notifies the user through push notification and adds reminder to
                user’s calendar. This is written in Go and used postgres database. Also written
                unit tests cases for the project. Xorm ORM used for Database operations.</p>
            <h3>Yelp Skill <small class="text-muted">(Feb’18 - now)</small></h3>
            <p>This is written in Go which uses Yelp API. Yelp skill allows you to get the list of
                restaurants based on provided search criteria. It provides detailed information of
                each restaurants. Search keywords can be location, category, locale, price level,
                restaurant name, distance etc.</p>
            <h3>Voice Box Android App <small class="text-muted">(Nov ‘17 - Jan’18 )</small></h3>
            <p>In this project, I worked on a part of an Android app which is similar to Amazon
                Echo. This app connects with bluetooth headset and performs multiple things like
                playing songs, telling weather report, reading news through voice commands
                from bluetooth headset. This app is integrated with Google ASR for speech
                recognition.</p>
            <h3>Logger <small class="text-muted">(Oct ‘17 )</small></h3>
            <p>This is a Logger service written in Go which takes care of writing all client logs
                and events into Amazon Kinesis and Papertrail, Mixpanel. I contributed very little
                to this project.</p>
            <h3>Weather Skill <small class="text-muted">(Jan ‘17 - Sep ‘17)</small></h3>
            <p>This web app developed in NodeJs and deployed on Heroku platform which
                gets POST request from user and fetches data from weather.com API and send
                it to user as a conversation sentences like Amazon echo. Caching also
                implemented. App skeleton derived through express.</p>
            <h3>Android Framework <small class="text-muted">(Feb ‘16 - Dec ‘16)</small></h3>
            <p>I worked for Android wearable, as part of that I customized some functionalities in
                Settings, SystemUI, Home in android Framework.</p>
            <h3>Sky Battle classic game for Android wearable <small class="text-muted">(Sep ‘15 - Jan ‘16)</small></h3>
            <p>This is a android game in which missiles and plane in sky run in opposite
                directions. User has to escape the plane from missiles by tilting the device. This
                is developed using surfaceview and accelerometer sensor API in Android .</p>
            </ul>
            <hr class="my-4"></hr>
            <h2>Education</h2>

            <div class="container border">
            <div class="row border">
                <div class="col-9">&nbsp; </div>
                <div class="col-9 "><small class="text-muted">JULY 2011 - JULY 2015</small></div>
                <div class="col-3"> 5.8/10 </div>
                <div class="col-9"><h5>IIT Guwahati, Assam, India - Mathematics and Computing (B.Tech)</h5></div>
            </div>
            <div class="row border">
                <div class="col-9">&nbsp; </div>
                <div class="col-9 "><small class="text-muted">JULY 2010</small></div>
                <div class="col-3"> 8.7/10 </div>
                <div class="col-9"><h5>APSWR Jr College, Hyderabad - XII class</h5></div>
            </div>
            <div class="row border">
                <div class="col-9">&nbsp; </div>
                <div class="col-9 "><small class="text-muted">JULY 2008</small></div>
                <div class="col-3"> 8.8/10 </div>
                <div class="col-9"> <h5>APSWR School, Warangal - X class</h5></div>
            </div>
            </div>

            <hr class="my-4"></hr>
            <h2>Personal Skills</h2>

            <ul>
                <li>Highly self motivated</li>
                <li>Good at interpersonal and communication skills</li>
                <li>Good team player</li>
            </ul>

            <hr class="my-4"></hr>
            <p>Date: 07-May-2017 IST</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Download .pdf</a>

        </div>

      </div>
    )
  }
}

export default Resume;
