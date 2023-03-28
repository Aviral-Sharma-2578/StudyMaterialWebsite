import React from 'react'
import LectureNotes from "./Images/lectureNotes.png"
import LectureSlides from "./Images/lectureSlides.jpg"
import Tutorials from "./Images/tutorials.jpg"
import QuestionPapers from "./Images/qPapers.jpg"
import Books from "./Images/books.jpg"

function Courses() {
  return (
    <ul class="dropdown-menu animate__animated animate__flipInX">
        <li><a class="dropdown-item" href="#scrollspyHeading12">HS111(Introduction to Philosophy)</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading13">HS113(Economics)</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading14">HS115(Reading Literature)</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading15">MA201(Mathematics-III)</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading16">EE104(Basic Electrical and Electronics Engineering )</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading17">CS201(Discrete Mathematical Structures)</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading18">CS203(Data Structures and Algorithms )</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading19">CS253(Data Structures and Algorithms Lab )</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading20">CS261(Program Development and Software Design Lab-I)</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading20">EE154(Basic Electrical and Electronics Engineering Lab )</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading20">IC211(Experimental Engineering Lab ))</a></li>
  </ul>
  )
}

export default function Semester3() {
  return (
    <div>
    <nav class="navbar bg-body-tertiary">
  <form class="container-fluid justify-content-end">
    <button class="btn btn-outline-success me-2" type="button">Semester 3</button>
    <button class="btn btn-outline-success me-2" type="button">Semester 4</button>
  </form>
</nav>
 <br /> <br />
    <div class="container-fluid mx-2">
      <h2 class="mx-1">Discover Content</h2>
      <br/>
    <div className="card mx-1" style={{width: 290, height: 360, float: "left"}}>
  <img src={LectureNotes} className="card-img-top" alt="cse"/>
  <div className="card-body">
    <h5 className="card-title">Lecture Notes</h5>
    <p className="card-text">Based on content delivered by our expert faculty</p>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Courses
  </button>
  <Courses />
</div>
  </div>
</div>
    
    <div className="card mx-1" style={{width: 290, height: 360, float: "left"}}>
  <img src={LectureSlides} className="card-img-top" alt="ee"/>
  <div className="card-body">
    <h5 className="card-title">Lecture Slides</h5>
    <p className="card-text">Shared and presented during regular lectures</p>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Courses
  </button>
  <Courses />
</div>
  </div>
</div>

<div className="card mx-1" style={{width: 290, height: 360, float: "left"}}>
  <img src={Tutorials} className="card-img-top" alt="me"/>
  <div className="card-body">
    <h5 className="card-title">Tutorials</h5>
    <p className="card-text">Expertly curated by our faculty from best of the sources</p>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Courses
  </button>
  <Courses />
</div>
  </div>
</div>

<div className="card mx-1" style={{width: 290, height: 360, float: "left"}}>
  <img src={QuestionPapers} className="card-img-top" height="200" alt="ce"/>
  <div className="card-body">
    <h5 className="card-title">Question Papers</h5>
    <p className="card-text">Mid-semester and end-semester question papers of past years</p>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Courses
  </button>
   <Courses />
</div>
  </div>
</div>


<div className="card mx-1" style={{width: 290, height: 360, float: "left"}}>
  <img src={Books} className="card-img-top" height="200" alt="mems"/>
  <div className="card-body">
    <h5 className="card-title">Books</h5>
    <p className="card-text">Recommemded textbooks and additional resources</p>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Courses
  </button>
  <Courses />
</div>
  </div>
</div>
</div>
    </div>
  )
}
