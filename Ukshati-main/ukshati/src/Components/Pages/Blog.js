import Layout from '../Layouts/Layout'
import { useEffect } from 'react';
import "../Styles/Blog.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineKeyboardArrowRight,MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";



const Blog = () => {
  useEffect(() => {
    AOS.init({duration:2000});
  }, []);

  return (
    <>
      <Layout>
        <div className="container">
          <div className="section-article" data-aos="fade-right">
          <MdOutlineKeyboardArrowRight className='Article-arrow'/>Article
          </div>
          {/* Blog row 1 */}
          {/* row 1, left card */}
          <div className="row">
            <div className="col-md-6">
              <div className="card" id="card-blog-row-1-1" data-aos="fade-right">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="https://imgs.search.brave.com/HEnaDi3odrajVBZI4UZYokzPxp2HNLqLIEjd-u-a414/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vMjg1NjNi/NGY4MzZjNjY3YjMw/MjM4ODY1Zjc5NmFl/YjAzYWU3MDJkYi0z/NTh4MzU3LnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw" className="card-img" alt="Image 1" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn" id="article-button">Read more<MdOutlineKeyboardDoubleArrowRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* row 1, right card */}
            <div className="col-md-6">
              <div className="card" id="card-blog-row-1-2" data-aos="fade-left">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="https://imgs.search.brave.com/HEnaDi3odrajVBZI4UZYokzPxp2HNLqLIEjd-u-a414/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vMjg1NjNi/NGY4MzZjNjY3YjMw/MjM4ODY1Zjc5NmFl/YjAzYWU3MDJkYi0z/NTh4MzU3LnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw" className="card-img" alt="Image 2" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn"id="article-button">Read more<MdOutlineKeyboardDoubleArrowRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog row 2 */}
          {/* row 2, left card */}
          <div className="row">
            <div className="col-md-6">
              <div className="card" id="card-blog-row-2-1" data-aos="fade-right">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="https://imgs.search.brave.com/HEnaDi3odrajVBZI4UZYokzPxp2HNLqLIEjd-u-a414/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vMjg1NjNi/NGY4MzZjNjY3YjMw/MjM4ODY1Zjc5NmFl/YjAzYWU3MDJkYi0z/NTh4MzU3LnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw" className="card-img" alt="Image 1" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn"id="article-button">Read more<MdOutlineKeyboardDoubleArrowRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* row 2, right card */}
            <div className="col-md-6">
              <div className="card" id="card-blog-row-2-2" data-aos="fade-left">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="https://imgs.search.brave.com/HEnaDi3odrajVBZI4UZYokzPxp2HNLqLIEjd-u-a414/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vMjg1NjNi/NGY4MzZjNjY3YjMw/MjM4ODY1Zjc5NmFl/YjAzYWU3MDJkYi0z/NTh4MzU3LnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw" className="card-img" alt="Image 2" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn"id="article-button">Read more<MdOutlineKeyboardDoubleArrowRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>





        {/* Youtube */}

        <div className="container">
          <div className="section-Youtube" data-aos="fade-right">
          <MdOutlineKeyboardArrowRight className='Youtube-arrow'/>Youtube
          </div>
          {/* youtube row 1 */}
          {/* row 1, left card */}
          <div className="row">
            <div className="col-md-6">
              <div className="card" id="card-youtube-row-1-1" data-aos="fade-right">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="https://imgs.search.brave.com/HEnaDi3odrajVBZI4UZYokzPxp2HNLqLIEjd-u-a414/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vMjg1NjNi/NGY4MzZjNjY3YjMw/MjM4ODY1Zjc5NmFl/YjAzYWU3MDJkYi0z/NTh4MzU3LnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw" className="card-img" alt="Image 1" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn"id="youtube-button">Read more<MdOutlineKeyboardDoubleArrowRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* row 1, right card */}
            <div className="col-md-6">
              <div className="card" id="card-youtube-row-1-2" data-aos="fade-left">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="https://imgs.search.brave.com/HEnaDi3odrajVBZI4UZYokzPxp2HNLqLIEjd-u-a414/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vMjg1NjNi/NGY4MzZjNjY3YjMw/MjM4ODY1Zjc5NmFl/YjAzYWU3MDJkYi0z/NTh4MzU3LnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw" className="card-img" alt="Image 2" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn"id="youtube-button">Read more<MdOutlineKeyboardDoubleArrowRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* youtube row 2 */}
          {/* row 2, left card */}
          <div className="row">
            <div className="col-md-6">
              <div className="card" id="card-youtube-row-2-1" data-aos="fade-right">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="https://imgs.search.brave.com/HEnaDi3odrajVBZI4UZYokzPxp2HNLqLIEjd-u-a414/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vMjg1NjNi/NGY4MzZjNjY3YjMw/MjM4ODY1Zjc5NmFl/YjAzYWU3MDJkYi0z/NTh4MzU3LnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw" className="card-img" alt="Image 1" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn"id="youtube-button">Read more<MdOutlineKeyboardDoubleArrowRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* row 2, right card */}
            <div className="col-md-6">
              <div className="card" id="card-youtube-row-2-2" data-aos="fade-left">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="https://imgs.search.brave.com/HEnaDi3odrajVBZI4UZYokzPxp2HNLqLIEjd-u-a414/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vMjg1NjNi/NGY4MzZjNjY3YjMw/MjM4ODY1Zjc5NmFl/YjAzYWU3MDJkYi0z/NTh4MzU3LnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw" className="card-img" alt="Image 2" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn"id="youtube-button">Read more<MdOutlineKeyboardDoubleArrowRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </Layout>
    
    
    
    </>
  )
}

export default Blog
