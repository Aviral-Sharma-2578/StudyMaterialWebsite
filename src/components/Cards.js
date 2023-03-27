import React from 'react'
import "./Styles.css"

export default function Cards() {
  return (
    <div class="container-fluid mx-2">
      <h2 class="mx-4">Discover Courses</h2>
      <br/>
    <div className="card mx-1" style={{width: 290, height: 360, float: "left"}}>
  <img src="https://images.squarespace-cdn.com/content/v1/5fce63270356d927d7eecdbd/033e9988-2ac8-4cb9-8b9f-5bf05fb22dcb/gff.jpg" className="card-img-top" alt="cse"/>
  <div className="card-body">
    <h5 className="card-title">Computer Science and Engineering</h5>
    <p className="card-text">Course coordinator: XYZ</p>
    <a href="/" className="btn btn-primary">See More</a>
  </div>
</div>
    
    <div className="card mx-1" style={{width: 290, height: 360, float: "left"}}>
  <img src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2010/04/electrical_component/9636951-4-eng-GB/Electrical_component_pillars.jpg" className="card-img-top" alt="ee"/>
  <div className="card-body">
    <h5 className="card-title">Electrical Engineering</h5>
    <p className="card-text">Course coordinator: XYZ</p>
    <a href="/" className="btn btn-primary">See More</a>
  </div>
</div>

<div className="card mx-1" style={{width: 290, height: 360, float: "left"}}>
  <img src="https://blog.flatworldsolutions.com/files/2019/11/top-mechanical-engineering-trends-to-watch-out-for-in-2020.jpg" className="card-img-top" alt="me"/>
  <div className="card-body">
    <h5 className="card-title">Mechanical Engineering</h5>
    <p className="card-text">Course coordinator: XYZ</p>
    <a href="/" className="btn btn-primary">See More</a>
  </div>
</div>

<div className="card mx-1" style={{width: 290, height: 360, float: "left"}}>
  <img src="https://t4.ftcdn.net/jpg/01/10/42/01/360_F_110420101_N63AR5SmjAyMeum9c2fHM0azkP89wv39.jpg" className="card-img-top" height="200" alt="ce"/>
  <div className="card-body">
    <h5 className="card-title">Civil Engineering</h5>
    <p className="card-text">Course coordinator: XYZ</p>
    <a href="/" className="btn btn-primary">See More</a>
  </div>
</div>


<div className="card mx-1" style={{width: 290, height: 360, float: "left"}}>
  <img src="https://msingermany.co.in/wp-content/uploads/2017/11/8-min-1.png" className="card-img-top" height="200" alt="mems"/>
  <div className="card-body">
    <h5 className="card-title">Metallurigcal Engineering and Material Science</h5>
    <p className="card-text">Course coordinator: XYZ</p>
    <a href="/" className="btn btn-primary">See More</a>
  </div>
</div>
</div>
  )
}
