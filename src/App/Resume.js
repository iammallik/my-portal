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
                <li><strong>Deployment Environments:</strong> Heroku, Amazon Kinesis</li>
                <li><strong>Other Technologies:</strong> NodeJs, Android, Docker, Redis, Linux, TDD</li>
            </ul>

            <hr class="my-4"></hr>
            <h2>Experience</h2>
            <h4>Iamplus Electronics India pvt Ltd, Bangalore <small class="text-muted"> - Software Engineer</small></h4>
            <h5>Sep 2015 - Present <small class="text-muted">(2 Years 8 months)</small></h5>


            <hr class="my-4"></hr>
            <h2>Education</h2>


            <div class="container">
                <div class="row">
                    <div class="col-8">col-8</div>
                    <div class="col-4">col-4</div>
                </div>
            </div>

            <hr class="my-4"></hr>
            <h2>Personality Skills</h2>
            <ul>
                <li>Highly self motivated</li>
                <li>Good at interpersonal and communication skills</li>
                <li>Good team player</li>
            </ul>

            <p>Date: 07-May-2017 IST</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Download .pdf</a>

        </div>

      </div>
    )
  }
}

export default Resume;
