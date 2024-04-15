export default function landing() {
  return (
        <>
      <div className="tap-top"><i data-feather="chevrons-up"></i></div>
      {/* {/* tap on tap ends */}
        {/* Loader star */}
      {/* <div className="loader-wrapper">
        <div className="loader"></div>
      </div> */}
      {/* Loader ends
        page-wrapper Star */}
      <div className="page-wrapper compact-wrapper" id="pageWrapper">

        {/* Page Body Star */}
        <div className="page-body-wrapper">
          {/* Page Sidebar */}
          <div className="page-body">
            {/* Container-fluid star */}
            <div className="container-fluid">
              <div className="user-profile social-app-profile">
                <div className="row">
                  <div className="col-sm-12">

                    <div className="card profile-header"><img className="img-fluid bg-img-cover" src="https://t3.ftcdn.net/jpg/05/02/46/00/360_F_502460014_Rt6c4E1HcQUcWMmg7akngLLwlXoE4Gvc.jpg" alt="" />
                      <div className="profile-img-wrrap"><img className="img-fluid bg-img-cover" src="https://t3.ftcdn.net/jpg/05/02/46/00/360_F_502460014_Rt6c4E1HcQUcWMmg7akngLLwlXoE4Gvc.jpg" alt="" /></div>
                      {/*  <div className="card profile-header"><img className="img-fluid bg-img-cover" src="https://www.bestremoteteam.com/wp-content/uploads/2023/04/industry-main-banner.webp" alt="">
                        <div className="profile-img-wrrap"><img className="img-fluid bg-img-cover" src="https://www.bestremoteteam.com/wp-content/uploads/2023/04/industry-main-banner.webp" alt=""></div>  */}
                        <div className="userpro-box">
                          <div className="img-wrraper">
                            <div className="avatar"><img className="img-fluid" alt="" src="../assets/images/avtar/stn-avtar.png" /></div>
                          </div>
                          <div className="user-designation">
                            <div className="title">
                              {/* <h4>Startup Tamilnadu</h4> */}
                              <h1>StartupTN SECTORS</h1>
                            </div>
                            {/* <div className="social-media"> 
                              <ul className="user-list-social">
                                <li><a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.google.com" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://www.rss.com" target="_blank"><i className="fa fa-rss"></i></a></li>
                              </ul>
                            </div>  */}
                            <div className="follow">
                              <ul className="follow-list">
                                <li>
                                  <div className="follow-num counter">31+</div><span>Sectors</span>
                                </li>
                                <li>
                                  <div className="follow-num counter">7700+</div><span>Startups</span>
                                </li>
                                <li>
                                  <div className="follow-num counter">36</div><span>Districts</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* user profile first-style start */}
                    <div className="col-sm-12 box-col-12">
                      <div className="card">
                        <div className="social-tab">
                          <ul className="nav nav-tabs" id="top-tab" role="tablist">
                            <li className="nav-item"><a className="nav-link active" id="top-sectors" data-bs-toggle="tab" href="#sectors" role="tab" aria-controls="sectors" aria-selected="true"><i data-feather="users"></i>Sectors</a></li>
                            <li className="nav-item"><a className="nav-link" id="top-timeline" data-bs-toggle="tab" href="#timeline" role="tab" aria-controls="timeline" aria-selected="false"><i data-feather="clock"></i>Timline</a></li>
                            <li className="nav-item"><a className="nav-link" id="top-about" data-bs-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="false"><i data-feather="alert-circle"></i>About                                 </a></li>
                            <li className="nav-item"><a className="nav-link" id="top-photos" data-bs-toggle="tab" href="#photos" role="tab" aria-controls="photos" aria-selected="false"><i data-feather="image"></i>Photos</a></li>
                          </ul>
                          <div className="input-group">
                            <input className="form-control" type="text" placeholder="Search......."/><span className="input-group-text"> <i className="fa fa-search"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="top-tabContent">
                    <div className="tab-pane fade show active" id="timeline" role="tabpanel" aria-labelledby="timeline">
                      <div className="row">
                        <div className="col-xl-3 xl-25 col-md-5 box-col-3">
                          <div className="default-according style-1 job-accordion" id="accordionoc4">
                            <div className="row">
                              <div className="col-xl-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="true" aria-controls="collapseicon">My Profile</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordion">
                                    <div className="card-body socialprofile filter-cards-view">
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" src="../assets/images/user/1.jpg" alt="" />
                                        <div className="flex-grow-1">
                                          <h5 className="font-primary f-w-600">My Page</h5><span className="d-block"><span><i className="fa fa-comments-o"> </i><span className="px-2">Messages<span className="badge badge-pill badge-light ms-1">9</span></span></span></span><span className="d-block"><span><i className="fa fa-bell-o"> </i><span className="px-2">Notification<span className="badge badge-pill badge-light ms-1">9</span></span></span></span>
                                        </div>
                                      </div>
                                      <div className="social-btngroup d-flex">
                                        <button className="btn btn-primary text-center me-2" type="button">Likes</button>
                                        <button className="btn btn-light text-center" type="button">View</button>
                                      </div>
                                      <div className="likes-profile text-center">
                                        <h4 className="f-w-600 mb-1">                                               <i className="fa fa-heart font-danger"></i> 884</h4>
                                      </div>
                                      <h6 className="text-center">35 New Likes This Week</h6>
                                      <div className="customers text-center social-group">
                                        <ul>
                                          <li className="d-inline-block"><img className="img-30 rounded-circle" src="../assets/images/user/3.jpg" alt="" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Johny Waston" /></li>
                                          <li className="d-inline-block"><img className="img-30 rounded-circle" src="../assets/images/user/5.jpg" alt="" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Andew Jon" /></li>
                                          <li className="d-inline-block"><img className="img-30 rounded-circle" src="../assets/images/user/1.jpg" alt="" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Comeren Diaz" /></li>
                                          <li className="d-inline-block"><img className="img-30 rounded-circle" src="../assets/images/user/2.png" alt="" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Bucky Barnes" /></li>
                                          <li className="d-inline-block"><img className="img-30 rounded-circle" src="../assets/images/user/8.jpg" alt="" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Jason Borne" /></li>
                                          <li className="d-inline-block"><img className="img-30 rounded-circle" src="../assets/images/user/11.png" alt="" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Comeren Diaz" /></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <div className="card"><img className="img-fluid" alt="" src="../assets/images/social-app/timeline-3.png" /></div>
                              </div>
                              <div className="col-md-12 col-sm-6">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon1" aria-expanded="true" aria-controls="collapseicon1">Mutual sectors</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon1" data-parent="#accordion" aria-labelledby="collapseicon1">
                                    <div className="card-body social-status filter-cards-view">
                                      <form>
                                        <div className="form-group m-0">
                                          <input className="form-control-social" type="search" placeholder="Search Contacts.."  />
                                        </div>
                                      </form>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/2.png" alt="" />
                                        <div className="social-status social-online"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Bucky Barnes</span></a><span className="d-block">winter@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/10.jpg" alt="" />
                                        <div className="social-status social-busy"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Sarah Loren</span></a><span className="d-block">barnes@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/6.jpg" alt="" />
                                        <div className="social-status social-offline"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Jason Borne</span></a><span className="d-block">jasonb@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/8.jpg" alt="" />
                                        <div className="social-status social-offline"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Comeren Diaz</span></a><span className="d-block">comere@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/14.png" alt="" />
                                        <div className="social-status social-online"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Andew Jon</span></a><span className="d-block">andrewj@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/4.jpg" alt="" />
                                        <div className="social-status social-busy"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Johny Waston</span></a><span className="d-block">johny@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/3.png" alt="" />
                                        <div className="social-status social-offline"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Johny William</span></a><span className="d-block">johnyw@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/2.png" alt="" />
                                        <div className="social-status social-online"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Bucky Barnes</span></a><span className="d-block">winter@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/10.jpg" alt="" />
                                        <div className="social-status social-busy"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Sarah Loren</span></a><span className="d-block">barnes@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/6.jpg" alt="" />
                                        <div className="social-status social-offline"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Jason Borne</span></a><span className="d-block">jasonb@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/8.jpg" alt="" />
                                        <div className="social-status social-offline"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Comeren Diaz</span></a><span className="d-block">comere@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/14.png" alt="" />
                                        <div className="social-status social-online"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Andew Jon</span></a><span className="d-block">andrewj@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/4.jpg" alt="" />
                                        <div className="social-status social-busy"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Johny Waston</span></a><span className="d-block">johny@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/3.png" alt="" />
                                        <div className="social-status social-offline"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Johny William</span></a><span className="d-block">johnyw@gmail.com</span></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12 col-sm-6">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon12" aria-expanded="true" aria-controls="collapseicon12">Activity Feed</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon12" aria-labelledby="collapseicon12" data-parent="#accordion">
                                    <div className="card-body social-status filter-cards-view">
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/10.jpg" alt="" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Andew Jon</span></a>
                                          <p>Commented on Shaun Park's <a href="javascript:void(0)">Photo</a></p><span className="light-span">20 min Ago</span>
                                        </div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/3.jpg" alt="" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Johny Waston</span></a>
                                          <p>Commented on Shaun Park's <a href="javascript:void(0)">Photo</a></p><span className="light-span">1 hour Ago</span>
                                        </div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/5.jpg" alt="" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Comeren Diaz</span></a>
                                          <p>Commented on Shaun Park's <a href="javascript:void(0)">Photo</a></p><span className="light-span">1 days Ago</span>
                                        </div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/4.jpg" alt="" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Sarah Loren</span></a>
                                          <p>Commented on Shaun Park's <a href="javascript:void(0)">Photo</a></p><span className="light-span">2 days Ago</span>
                                        </div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/3.jpg" alt="" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Johny Waston</span></a>
                                          <p>Commented on Shaun Park's <a href="javascript:void(0)">Photo</a></p><span className="light-span">5 days Ago</span>
                                        </div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/5.jpg" alt="" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Comeren Diaz</span></a>
                                          <p>Commented on Shaun Park's <a href="javascript:void(0)">Photo</a></p><span className="light-span">6 days Ago</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 xl-50 col-md-7 box-col-6">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="card">
                                <div className="card-body">
                                  <div className="new-users-social">
                                    <div className="d-flex"><img className="rounded-circle image-radius m-r-15" src="../assets/images/user/1.jpg" alt="" />
                                      <div className="flex-grow-1">
                                        <h4 className="mb-0 f-w-700">ELANA</h4>
                                        <p>January, 12,2022</p>
                                      </div><span className="pull-right mt-0"><i data-feather="more-vertical">
                                        </i></span>
                                    </div>
                                  </div><img className="img-fluid" alt="" src="../assets/images/social-app/timeline-1.png" />
                                    <div className="timeline-content">
                                      <p>
                                        The only way to do something in depth is to work hard. I've always thought of the T-shirt as the Alpha of the fashion alphabet.
                                        My breakfast is very important. Everything I do is a matter of heart, body and soul.
                                      </p>
                                      <div className="like-content mt-2"><span><i className="fa fa-heart font-danger"></i></span><span className="pull-right comment-number"><span>20 </span><span><i className="fa fa-share-alt me-0"></i></span></span><span className="pull-right comment-number"><span>10 </span><span><i className="fa fa-comments-o"></i></span></span></div>
                                      <div className="social-chat">
                                        <div className="your-msg">
                                          <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/1.jpg" />
                                            <div className="flex-grow-1"><span className="f-w-600">Jason Borne <span>1 Year Ago <i className="fa fa-reply font-primary"></i></span></span>
                                              <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="other-msg">
                                          <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/2.png" />
                                            <div className="flex-grow-1"><span className="f-w-600">Alexendra Dhadio <span>1 Month Ago <i className="fa fa-reply font-primary"></i></span></span>
                                              <p>yes, really very awesome car i see the features of this car in the official website of #Mercedes-Benz and really impressed :-)</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="other-msg">
                                          <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.png" />
                                            <div className="flex-grow-1"><span className="f-w-600">Olivia Jon <span>15 Days Ago <i className="fa fa-reply font-primary"></i></span></span>
                                              <p>i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="your-msg">
                                          <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/1.jpg" />
                                            <div className="flex-grow-1"><span className="f-w-600">Issa Bell <span>1 Year Ago <i className="fa fa-reply font-primary"></i></span></span>
                                              <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="text-center"><a className="f-w-600" href="javascript:void(0)">More Commnets</a></div>
                                      </div>
                                      <div className="comments-box">
                                        <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/1.jpg" />
                                          <div className="flex-grow-1">
                                            <div className="input-group text-box">
                                              <input className="form-control input-txt-bx" type="text" name="message-to-send" placeholder="Post Your commnets" />
                                                <div className="input-group-text">                                                    <img src="../assets/images/smiley.png" alt="" /></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="card">
                                <div className="card-body">
                                  <div className="new-users-social">
                                    <div className="d-flex"><img className="rounded-circle image-radius m-r-15" src="../assets/images/user/1.jpg" alt="" />
                                      <div className="flex-grow-1">
                                        <h4 className="mb-0 f-w-700">ELANA</h4>
                                        <p>January, 12,2019</p>
                                      </div>
                                      <span className="pull-right mt-0"><i data-feather="more-vertical"></i></span>
                                    </div>
                                  </div><img className="img-fluid" alt="" src="../assets/images/social-app/timeline-2.png" />
                                    <div className="timeline-content">
                                      <p>
                                        I've always thought of the T-shirt as the Alpha of the fashion alphabet. My breakfast is very important. Everything I do is a matter of heart,
                                        body and soul. The only way to do something in depth is to work hard.
                                      </p>
                                      <div className="like-content"><span><i className="fa fa-heart font-danger"></i></span><span className="pull-right comment-number"><span>20 </span><span><i className="fa fa-share-alt me-0"></i></span></span><span className="pull-right comment-number"><span>10 </span><span><i className="fa fa-comments-o"></i></span></span></div>
                                      <div className="social-chat">
                                        <div className="your-msg">
                                          <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/1.jpg" />
                                            <div className="flex-grow-1"><span className="f-w-600">Jason Borne <span>1 Year Ago <i className="fa fa-reply font-primary"></i></span></span>
                                              <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="your-msg">
                                          <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/1.jpg" />
                                            <div className="flex-grow-1"><span className="f-w-600">Issa Bell <span>1 Year Ago <i className="fa fa-reply font-primary"></i></span></span>
                                              <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="text-center"><a className="f-w-600" href="javascript:void(0)">More Commnets</a></div>
                                      </div>
                                      <div className="comments-box">
                                        <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/1.jpg" />
                                          <div className="flex-grow-1">
                                            <div className="input-group text-box">
                                              <input className="form-control input-txt-bx" type="text" name="message-to-send" placeholder="Post Your commnets" />
                                                <div className="input-group-text">                                                    <img src="../assets/images/smiley.png" alt="" /></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 xl-25 box-col-3">
                          <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc1">
                            <div className="row">
                              <div className="col-xl-12 col-md-6 xl-100 box-col-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon2" aria-expanded="true" aria-controls="collapseicon2">Profile Intro</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon2" aria-labelledby="collapseicon2" data-parent="#accordion">
                                    <div className="card-body filter-cards-view">
                                      <div className="filter-view-group"><span className="f-w-600">About Me :</span>
                                        <p>
                                          Hi, I’m elana, I’m 30 and I work as a
                                          web Designer for the “Daydreams”
                                          Agency in Pier 56.
                                        </p>
                                      </div>
                                      <div className="filter-view-group"><span className="f-w-600">Favourite TV shows :</span>
                                        <p>
                                          Breaking Good, RedDevil, People of
                                          Interest, The Running Dead,
                                          Found, American Guy.
                                        </p>
                                      </div>
                                      <div className="filter-view-group"><span className="f-w-600">Favourite Music Bands :</span>
                                        <p>
                                          Breaking Good, RedDevil, People of
                                          Interest, The Running Dead,
                                          Found, American Guy.
                                        </p>
                                      </div>
                                      <div className="social-network theme-form"><span className="f-w-600">Social Networks</span><a className="btn social-btn btn-fb mb-2 text-center" href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook m-r-5"></i>Facebook</a><a className="btn social-btn btn-twitter mb-2 text-center" href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter m-r-5"></i>Twitter</a><a className="btn social-btn btn-google text-center" href="https://www.dribbble.com" target="_blank"><i className="fa fa-dribbble m-r-5"></i>Dribbble</a></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-sm-6 xl-100 box-col-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon3" aria-expanded="true" aria-controls="collapseicon3">Followers</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon3" aria-labelledby="collapseicon3" data-parent="#accordion">
                                    <div className="card-body social-list filter-cards-view">
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/2.png" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="d-block">Bucky Barnes</span></a><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.png" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="d-block">Sarah Loren</span></a><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.jpg" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="d-block">Jason Borne</span></a><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/10.jpg" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="d-block">Comeren Diaz</span></a><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/11.png" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="d-block">Andew Jon</span></a><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-sm-6 xl-100 box-col-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon10" aria-expanded="true" aria-controls="collapseicon10">Followings</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon10" aria-labelledby="collapseicon10" data-parent="#accordion">
                                    <div className="card-body social-list filter-cards-view">
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.png" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="d-block">Sarah Loren</span></a><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/2.png" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="d-block">Bucky Barnes</span></a><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/10.jpg" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="d-block">Comeren Diaz</span></a><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.jpg" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="d-block">Jason Borne</span></a><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/11.png" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="d-block">Andew Jon</span></a><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-sm-6 xl-100 box-col-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon4" aria-expanded="true" aria-controls="collapseicon4">Latest Photos</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon4" data-parent="#accordion" aria-labelledby="collapseicon4">
                                    <div className="card-body photos filter-cards-view">
                                      <ul>
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-1.png" /></div>
                                        </li>
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-2.png" /></div>
                                        </li>
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-3.png" /></div>
                                        </li>
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-4.png" /></div>
                                        </li>
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-5.png" /></div>
                                        </li>
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-6.png" /></div>
                                        </li>
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-7.png" /></div>
                                        </li>
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-8.png" /></div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-sm-6 xl-100 box-col-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon13" aria-expanded="true" aria-controls="collapseicon13">sectors</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon13" data-parent="#accordion" aria-labelledby="collapseicon13">
                                    <div className="card-body avatar-showcase filter-cards-view">
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/3.jpg" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/5.jpg" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/1.jpg" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/2.png" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/3.png" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/6.jpg" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/10.jpg" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/14.png" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/1.jpg" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/4.jpg" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/11.png" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/8.jpg" alt="#" /></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-md-6 xl-100 box-col-12">
                                <div className="card"><img className="img-fluid" src="../assets/images/social-app/timeline-4.png" alt="" /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about">
                      <div className="row">
                        <div className="col-xl-3 xl-25 col-lg-12 col-md-5 box-col-3">
                          <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc2">
                            <div className="row">
                              <div className="col-xl-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon5" aria-expanded="true" aria-controls="collapseicon5">My Profile</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon5" aria-labelledby="collapseicon5" data-parent="#accordion">
                                    <div className="card-body socialprofile filter-cards-view">
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" src="../assets/images/user/1.jpg" alt="" />
                                        <div className="flex-grow-1">
                                          <h5 className="font-primary f-w-600">My Page</h5><span className="d-block"><span><i className="fa fa-comments-o"> </i><span className="px-2">Messages<span className="badge badge-pill badge-light">9</span></span></span></span><span className="d-block"><span><i className="fa fa-bell-o"></i><span className="px-2">Notification<span className="badge badge-pill badge-light">9</span></span></span></span>
                                        </div>
                                      </div>
                                      <div className="social-btngroup d-flex">
                                        <button className="btn btn-primary text-center me-2" type="button">Likes</button>
                                        <button className="btn btn-light text-center" type="button">View</button>
                                      </div>
                                      <div className="likes-profile text-center">
                                        <h4 className="f-w-600"> <i className="fa fa-heart font-danger"></i> 884</h4>
                                      </div>
                                      <h6 className="text-center">35 New Likes This Week</h6>
                                      <div className="customers text-center social-group">
                                        <ul>
                                          <li className="d-inline-block"><img className="img-30 rounded-circle" src="../assets/images/user/3.jpg" alt="" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Johny Waston" /></li>
                                          <li className="d-inline-block"><img className="img-30 rounded-circle" src="../assets/images/user/5.jpg" alt="" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Andew Jon" /></li>
                                          <li className="d-inline-block"><img className="img-30 rounded-circle" src="../assets/images/user/1.jpg" alt="" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Comeren Diaz" /></li>
                                          <li className="d-inline-block"><img className="img-30 rounded-circle" src="../assets/images/user/2.png" alt="" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Bucky Barnes" /></li>
                                          <li className="d-inline-block"><img className="img-30 rounded-circle" src="../assets/images/user/8.jpg" alt="" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Jason Borne" /></li>
                                          <li className="d-inline-block"><img className="img-30 rounded-circle" src="../assets/images/user/11.png" alt="" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Comeren Diaz" /></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <div className="card"><img className="img-fluid" alt="" src="../assets/images/social-app/timeline-3.png" /></div>
                              </div>
                              <div className="col-xl-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon6" aria-expanded="true" aria-controls="collapseicon6">Mutual sectors</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon6" data-parent="#accordion" aria-labelledby="collapseicon6">
                                    <div className="card-body social-status filter-cards-view">
                                      <form>
                                        <div className="form-group m-0">
                                          <input className="form-control-social" type="search" placeholder="Search Contacts.." />
                                        </div>
                                      </form>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/2.png" alt="" />
                                        <div className="social-status social-online"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Bucky Barnes</span></a><span className="d-block">winter@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/10.jpg" alt="" />
                                        <div className="social-status social-busy"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Sarah Loren</span></a><span className="d-block">barnes@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/6.jpg" alt="" />
                                        <div className="social-status social-offline"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Jason Borne</span></a><span className="d-block">jasonb@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/8.jpg" alt="" />
                                        <div className="social-status social-offline"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Comeren Diaz</span></a><span className="d-block">comere@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/14.png" alt="" />
                                        <div className="social-status social-online"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Andew Jon</span></a><span className="d-block">andrewj@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/4.jpg" alt="" />
                                        <div className="social-status social-busy"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Johny Waston</span></a><span className="d-block">johny@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/3.png" alt="" />
                                        <div className="social-status social-offline"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Johny William</span></a><span className="d-block">johnyw@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/2.png" alt="" />
                                        <div className="social-status social-online"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Bucky Barnes</span></a><span className="d-block">winter@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/10.jpg" alt="" />
                                        <div className="social-status social-busy"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Sarah Loren</span></a><span className="d-block">barnes@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/6.jpg" alt="" />
                                        <div className="social-status social-offline"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Jason Borne</span></a><span className="d-block">jasonb@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/8.jpg" alt="" />
                                        <div className="social-status social-offline"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Comeren Diaz</span></a><span className="d-block">comere@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/14.png" alt="" />
                                        <div className="social-status social-online"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Andew Jon</span></a><span className="d-block">andrewj@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/4.jpg" alt="" />
                                        <div className="social-status social-busy"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Johny Waston</span></a><span className="d-block">johny@gmail.com</span></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/3.png" alt="" />
                                        <div className="social-status social-offline"></div>
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Johny William</span></a><span className="d-block">johnyw@gmail.com</span></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon14" aria-expanded="true" aria-controls="collapseicon14">Activity Feed</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon14" aria-labelledby="collapseicon14" data-parent="#accordion">
                                    <div className="card-body social-status filter-cards-view">
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/10.jpg" alt="" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Andew Jon</span></a>
                                          <p>Commented on Andew jon's <a href="javascript:void(0)">Photo</a></p><span className="light-span">20 min Ago</span>
                                        </div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/3.jpg" alt="" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Johny Waston</span></a>
                                          <p>Commented on Johny kim's <a href="javascript:void(0)">Photo</a></p><span className="light-span">1 hour Ago</span>
                                        </div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/5.jpg" alt="" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">genel Diaz</span></a>
                                          <p>Commented on genel Park's <a href="javascript:void(0)">Photo</a></p><span className="light-span">1 days Ago</span>
                                        </div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/4.jpg" alt="" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Sarah Loren</span></a>
                                          <p>Commented on Shaun Park's <a href="javascript:void(0)">Photo</a></p><span className="light-span">2 days Ago</span>
                                        </div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/3.jpg" alt="" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Johny Waston</span></a>
                                          <p>Commented on Waston Park's <a href="javascript:void(0)">Photo</a></p><span className="light-span">5 days Ago</span>
                                        </div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 rounded-circle m-r-15" src="../assets/images/user/5.jpg" alt="" />
                                        <div className="flex-grow-1"><a href="user-profile.html"><span className="f-w-600 d-block">Comeren Diaz</span></a>
                                          <p>Commented on Diaz Leo's <a href="javascript:void(0)">Photo</a></p><span className="light-span">6 days Ago</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 xl-50 col-lg-12 col-md-7 box-col-6">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="card">
                                <div className="card-header">
                                  <h3>Pepole You May Know</h3>
                                </div>
                               <div className="card-body avatar-showcase pt-0">
                                  <div className="pepole-knows">
                                    <ul>
                                      <li>
                                        <div className="add-friend text-center"><img className="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/2.png" /><span className="d-block f-w-600">Jason Borne</span><a className="btn btn-primary btn-xs" href="user-profile.html">Add Friend</a></div>
                                      </li>
                                      <li>
                                        <div className="add-friend text-center"><img className="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/3.png" /><span className="d-block f-w-600">Anna Mull</span><a className="btn btn-primary btn-xs" href="user-profile.html">Add Friend</a></div>
                                      </li>
                                      <li>
                                        <div className="add-friend text-center"><img className="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/3.jpg" /><span className="d-block f-w-600">Dion Cast</span><a className="btn btn-primary btn-xs" href="user-profile.html">Add Friend</a></div>
                                      </li>
                                      <li>
                                        <div className="add-friend text-center"><img className="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/4.jpg" /><span className="d-block f-w-600">Karlene Lex</span><a className="btn btn-primary btn-xs" href="user-profile.html">Add Friend</a></div>
                                      </li>
                                      <li>
                                        <div className="add-friend text-center"><img className="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/8.jpg" /><span className="d-block f-w-600">Vella Chism</span><a className="btn btn-primary btn-xs" href="user-profile.html">Add Friend</a></div>
                                      </li>
                                      <li>
                                        <div className="add-friend text-center"><img className="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/10.jpg" /><span className="d-block f-w-600">Wai Schalk</span><a className="btn btn-primary btn-xs" href="user-profile.html">Add Friend /</a></div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="card">
                                <div className="card-header social-header">
                                  <h3 className="f-w-600">Hobbies and Interests<span className="pull-right"><i data-feather="more-vertical"></i></span></h3>
                                </div>
                                <div className="card-body pt-0">
                                  <div className="row details-about">
                                    <div className="col-sm-6">
                                      <div className="your-details">
                                        <h4 className="f-w-600">Hobbies:</h4>
                                        <p>I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it’s raining outside.</p>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="your-details your-details-xs">
                                        <h4 className="f-w-600">Favourite Music Bands / Artists:</h4>
                                        <p>Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row details-about">
                                    <div className="col-sm-6">
                                      <div className="your-details">
                                        <h4 className="f-w-600">Favourite TV Shows:</h4>
                                        <p>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</p>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="your-details your-details-xs">
                                        <h4 className="f-w-600">Favourite Books:</h4>
                                        <p>The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row details-about">
                                    <div className="col-sm-6">
                                      <div className="your-details">
                                        <h4 className="f-w-600">Favourite Movies:</h4>
                                        <p>Idiocratic, The Scarred Wizard and the Fire Crown, Crime Squad Ferrum Man.</p>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="your-details your-details-xs">
                                        <h4 className="f-w-600">Favourite Writers:</h4>
                                        <p>Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandr Platt, Marcus Roth.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row details-about">
                                    <div className="col-sm-6">
                                      <div className="your-details">
                                        <h4 className="f-w-600">Favourite Games:</h4>
                                        <p>The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.</p>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="your-details your-details-xs">
                                        <h4 className="f-w-600">Other Interests:</h4>
                                        <p>Swimming, Surfing, Sviho Diving, Anime, Photography, Tattoos, Street Art.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="card">
                                <div className="card-header social-header">
                                  <h3> <span className="f-w-600">Education and Employement</span><span className="pull-right"><i data-feather="more-vertical"></i></span></h3>
                                </div>
                                <div className="card-body pt-0">
                                  <div className="row details-about">
                                    <div className="col-sm-6">
                                      <div className="your-details">
                                        <h4 className="f-w-600">The New College of Design</h4>
                                        <p>2001 - 2006</p>
                                        <p>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</p>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="your-details your-details-xs">
                                        <h4 className="f-w-600">Digital Design Intern</h4>
                                        <p>2006-2008</p>
                                        <p>Digital Design Intern for the “Multimedz” agency. Was in charge of the communication with the clients.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row details-about">
                                    <div className="col-sm-6">
                                      <div className="your-details">
                                        <h4 className="f-w-600">Rembrandt Institute</h4>
                                        <p>2008</p>
                                        <p>Five months Digital Illustration course. Professor: Leonardo Stagg.</p>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="your-details your-details-xs">
                                        <h4 className="f-w-600">UI/UX Designer</h4>
                                        <p>2001 - 2006</p>
                                        <p>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row details-about">
                                    <div className="col-sm-6">
                                      <div className="your-details">
                                        <h4 className="f-w-600">The Digital College</h4>
                                        <p>2010</p>
                                        <p>6 months intensive Motion Graphics course. After Effects and Premire. Professor: Donatello Urtle.</p>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="your-details your-details-xs">
                                        <h4 className="f-w-600">The New College of Design</h4>
                                        <p>2008 - 2013</p>
                                        <p>UI/UX Designer for the “Daydreams” agency.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="card">
                                <div className="card-header">
                                  <h3>Viewed Your Profile</h3>
                                </div>
                                <div className="card-body avatar-showcase pt-0">
                                  <div className="pepole-knows">
                                    <ul>
                                      <li>
                                        <div className="add-friend text-center"><img className="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/2.png" /><span className="d-block f-w-600">Jason Borne</span><a className="btn btn-primary btn-xs" href="user-profile.html">Add Friend</a></div>
                                      </li>
                                      <li>
                                        <div className="add-friend text-center"><img className="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/3.png" /><span className="d-block f-w-600">Anna Mull</span><a className="btn btn-primary btn-xs" href="user-profile.html">Add Friend</a></div>
                                      </li>
                                      <li>
                                        <div className="add-friend text-center"><img className="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/3.jpg" /><span className="d-block f-w-600">Dion Cast</span><a className="btn btn-primary btn-xs" href="user-profile.html">Add Friend</a></div>
                                      </li>
                                      <li>
                                        <div className="add-friend text-center"><img className="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/4.jpg" /><span className="d-block f-w-600">Karlene Lex</span><a className="btn btn-primary btn-xs" href="user-profile.html">Add Friend</a></div>
                                      </li>
                                      <li>
                                        <div className="add-friend text-center"><img className="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/8.jpg" /><span className="d-block f-w-600">Vella Chism</span><a className="btn btn-primary btn-xs" href="user-profile.html">Add Friend</a></div>
                                      </li>
                                      <li>
                                        <div className="add-friend text-center"><img className="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/10.jpg" /><span className="d-block f-w-600">Wai Schalk</span><a className="btn btn-primary btn-xs" href="user-profile.html">Add Friend</a></div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="card">
                                <div className="card-header">
                                  <h3>Activity Log</h3>
                                </div>
                                <div className="card-body pt-0">
                                  <div className="activity-log">
                                    <div className="my-activity">
                                      <h4 className="f-w-600">Today</h4>
                                      <p><span><i className="m-r-20" data-feather="thumbs-up"></i></span>Comeren Diaz likes your photos.</p>
                                      <p><span><i className="m-r-20" data-feather="user-plus"></i></span>Karlene Lex and Comeren Diaz now sectors.</p>
                                      <p><span><i className="m-r-20" data-feather="message-square"></i></span>Sarah Loren wrote on your timeline </p>
                                      <p><span><i className="m-r-20" data-feather="thumbs-up"></i></span>Johny Waston likes your post's.</p>
                                      <p><span><i className="m-r-20" data-feather="user-plus"></i></span>Andew Jon became sectors with Comeren Diaz.</p>
                                      <p><span><i className="m-r-20" data-feather="user-plus"></i></span>Johny Waston became sectors with Bucky Barnes.</p>
                                    </div>
                                    <div className="my-activity">
                                      <h4 className="f-w-600">25 December</h4>
                                      <p><span><i className="m-r-20" data-feather="thumbs-up"></i></span>Comeren Diaz likes your photos.</p>
                                      <p><span><i className="m-r-20" data-feather="thumbs-up"></i></span>Johny Waston likes your post's.</p>
                                      <p><span><i className="m-r-20" data-feather="user-plus"></i></span>Karlene Lex and Comeren Diaz now sectors.</p>
                                      <p><span><i className="m-r-20" data-feather="user-plus"></i></span>Johny Waston became sectors with Bucky Barnes.</p>
                                      <p><span><i className="m-r-20" data-feather="message-square"></i></span>Sarah Loren wrote on your timeline </p>
                                      <p><span><i className="m-r-20" data-feather="message-square"></i></span>Comeren Diaz wrote on your timeline</p>
                                    </div>
                                    <div className="my-activity">
                                      <h4 className="f-w-600">8 september</h4>
                                      <p><span><i className="m-r-20" data-feather="thumbs-up"></i></span>Comeren Diaz likes your photos.</p>
                                      <p><span><i className="m-r-20" data-feather="thumbs-up"></i></span>Johny Waston likes your post's.</p>
                                      <p><span><i className="m-r-20" data-feather="user-plus"></i></span>Karlene Lex and Comeren Diaz now sectors.</p>
                                      <p><span><i className="m-r-20" data-feather="user-plus"></i></span>Johny Waston became sectors with Bucky Barnes.</p>
                                      <p><span><i className="m-r-20" data-feather="message-square"></i></span>Sarah Loren wrote on your timeline </p>
                                      <p><span><i className="m-r-20" data-feather="user-plus"></i></span>Andew Jon became sectors with Comeren Diaz.</p>
                                    </div>
                                    <div className="my-activity">
                                      <h4 className="f-w-600">6 June</h4>
                                      <p><span><i className="m-r-20" data-feather="thumbs-up"></i></span>Comeren Diaz likes your photos.</p>
                                      <p><span><i className="m-r-20" data-feather="user-plus"></i></span>Karlene Lex and Comeren Diaz now sectors.</p>
                                      <p><span><i className="m-r-20" data-feather="message-square"></i></span>Sarah Loren wrote on your timeline </p>
                                      <p><span><i className="m-r-20" data-feather="thumbs-up"></i></span>Johny Waston likes your post's.</p>
                                      <p><span><i className="m-r-20" data-feather="user-plus"></i></span>Andew Jon became sectors with Comeren Diaz.</p>
                                      <p><span><i className="m-r-20" data-feather="user-plus"></i></span>Johny Waston became sectors with Bucky Barnes.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 xl-25 box-col-3">
                          <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc3">
                            <div className="row">
                              <div className="col-xl-12 xl-100 box-col-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon7" aria-expanded="true" aria-controls="collapseicon7">Profile Intro</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon7" aria-labelledby="collapseicon" data-parent="#accordion" aria-controls="collapseicon7">
                                    <div className="card-body filter-cards-view">
                                      <div className="filter-view-group"><span className="f-w-600">About Me :</span>
                                        <p>
                                          Hi, I’m elana, I’m 30 and I work as a
                                          web Designer for the “Daydreams”
                                          Agency in Pier 56.
                                        </p>
                                      </div>
                                      <div className="filter-view-group"><span className="f-w-600">Favourite TV shows :</span>
                                        <p>
                                          Breaking Good, RedDevil, People of
                                          Interest, The Running Dead,
                                          Found, American Guy.
                                        </p>
                                      </div>
                                      <div className="filter-view-group"><span className="f-w-600">Favourite Music Bands :</span>
                                        <p>
                                          Breaking Good, RedDevil, People of
                                          Interest, The Running Dead,
                                          Found, American Guy.
                                        </p>
                                      </div>
                                      <div className="social-network theme-form"><span className="f-w-600">Social Networks</span><a className="btn social-btn btn-fb mb-2 text-center" href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook m-r-5"></i>Facebook</a><a className="btn social-btn btn-twitter mb-2 text-center" href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter m-r-5"></i>Twitter</a><a className="btn social-btn btn-google text-center" href="https://www.dribbble.com" target="_blank"><i className="fa fa-dribbble m-r-5"></i>Dribbble</a></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 xl-100 box-col-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon8" aria-expanded="true" aria-controls="collapseicon8">Followers</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon8" aria-labelledby="collapseicon8" data-parent="#accordion">
                                    <div className="card-body social-list filter-cards-view">
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/2.png" />
                                        <div className="flex-grow-1"><span className="d-block">Bucky Barnes</span><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.png" />
                                        <div className="flex-grow-1"><span className="d-block">Sarah Loren</span><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.jpg" />
                                        <div className="flex-grow-1"><span className="d-block">Jason Borne</span><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/10.jpg" />
                                        <div className="flex-grow-1"><span className="d-block">Comeren Diaz</span><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/11.png" />
                                        <div className="flex-grow-1"><span className="d-block">Andew Jon</span><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 xl-100 box-col-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon11" aria-expanded="true" aria-controls="collapseicon11">Followings</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon11" aria-labelledby="collapseicon11" data-parent="#accordion">
                                    <div className="card-body social-list filter-cards-view">
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.png" />
                                        <div className="flex-grow-1"><span className="d-block">Sarah Loren</span><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/2.png" />
                                        <div className="flex-grow-1"><span className="d-block">Bucky Barnes</span><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/10.jpg" />
                                        <div className="flex-grow-1"><span className="d-block">Comeren Diaz</span><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.jpg" />
                                        <div className="flex-grow-1"><span className="d-block">Jason Borne</span><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                      <div className="d-flex"><img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/11.png" />
                                        <div className="flex-grow-1"><span className="d-block">Andew Jon</span><a href="javascript:void(0)">Add Friend</a></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 xl-100 box-col-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon9" aria-expanded="true" aria-controls="collapseicon9">Latest Photos</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon9" data-parent="#accordion" aria-labelledby="collapseicon9">
                                    <div className="card-body photos filter-cards-view">
                                      <ul className="text-center">
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-1.png" /></div>
                                        </li>
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-2.png" /></div>
                                        </li>
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-3.png" /></div>
                                        </li>
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-4.png" /></div>
                                        </li>
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-5.png" /></div>
                                        </li>
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-6.png" /></div>
                                        </li>
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-7.png" /></div>
                                        </li>
                                        <li>
                                          <div className="latest-post"><img className="img-fluid" alt="" src="../assets/images/social-app/post-8.png" /></div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 xl-100 box-col-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="p-0">
                                      <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon15" aria-expanded="true" aria-controls="collapseicon15">sectors</button>
                                    </h3>
                                  </div>
                                  <div className="collapse show" id="collapseicon15" data-parent="#accordion" aria-labelledby="collapseicon15">
                                    <div className="card-body avatar-showcase filter-cards-view">
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/3.jpg" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/5.jpg" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/1.jpg" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/2.png" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/3.png" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/6.jpg" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/10.jpg" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/14.png" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/1.jpg" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/4.jpg" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/11.png" alt="#" /></div>
                                      <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src="../assets/images/user/8.jpg" alt="#" /></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 xl-100 box-col-12">
                                <div className="card"><img className="img-fluid" src="../assets/images/social-app/timeline-4.png" alt="" /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="sectors" role="tabpanel" aria-labelledby="sectors">
                      <div className="row">
                        <div className="col-sm-6 col-lg-6 col-xl-4 box-col-33">
                          <div className="card custom-card">
                            <div className="card-header"><img className="img-fluid" src="../assets/images/user-card/1.jpg" alt="" /></div>
                            <div className="card-profile"><img className="rounded-circle" src="../assets/images/avtar/3.jpg" alt="" /></div>
                            <ul className="card-social">
                              <li><a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                              <li><a href="https://www.google.com" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                              <li><a href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                              <li><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
                              <li><a href="https://www.rss.com" target="_blank"><i className="fa fa-rss"></i></a></li>
                            </ul>
                            <div className="text-center profile-details"><a href="user-profile.html">
                              <h2>Mark Jecno</h2>
                              <h6>CEO</h6></a></div>
                            <div className="card-footer row">
                              <div className="col-4 col-sm-4">
                                <h6>Follower</h6>
                                <h3 className="counter">9564</h3>
                              </div>
                              <div className="col-4 col-sm-4">
                                <h6>Following</h6>
                                <h3><span className="counter">49</span>K</h3>
                              </div>
                              <div className="col-4 col-sm-4">
                                <h6>Total Post</h6>
                                <h3><span className="counter">96</span>M</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 col-xl-4 box-col-33">
                          <div className="card custom-card">
                            <div className="card-header"><img className="img-fluid" src="../assets/images/user-card/2.jpg" alt="" /></div>
                            <div className="card-profile"><img className="rounded-circle" src="../assets/images/avtar/16.jpg" alt="" /></div>
                            <ul className="card-social">
                              <li><a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                              <li><a href="https://www.google.com" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                              <li><a href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                              <li><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
                              <li><a href="https://www.rss.com" target="_blank"><i className="fa fa-rss"></i></a></li>
                            </ul>
                            <div className="text-center profile-details"><a href="user-profile.html">
                              <h2>Johan Deo</h2></a>
                              <h6>Designer</h6>
                            </div>
                            <div className="card-footer row">
                              <div className="col-4 col-sm-4">
                                <h6>Follower</h6>
                                <h3 className="counter">2578</h3>
                              </div>
                              <div className="col-4 col-sm-4">
                                <h6>Following</h6>
                                <h3><span className="counter">26</span>K</h3>
                              </div>
                              <div className="col-4 col-sm-4">
                                <h6>Total Post</h6>
                                <h3><span className="counter">96</span>M</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 col-xl-4 box-col-33">
                          <div className="card custom-card">
                            <div className="card-header"><img className="img-fluid" src="../assets/images/user-card/3.jpg" alt="" /></div>
                            <div className="card-profile"><img className="rounded-circle" src="../assets/images/avtar/11.jpg" alt="" /></div>
                            <ul className="card-social">
                              <li><a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                              <li><a href="https://www.google.com" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                              <li><a href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                              <li><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
                              <li><a href="https://www.rss.com" target="_blank"><i className="fa fa-rss"></i></a></li>
                            </ul>
                            <div className="text-center profile-details"><a href="user-profile.html">
                              <h2>Dev John</h2></a>
                              <h6>Developer</h6>
                            </div>
                            <div className="card-footer row">
                              <div className="col-4 col-sm-4">
                                <h6>Follower</h6>
                                <h3 className="counter">6545</h3>
                              </div>
                              <div className="col-4 col-sm-4">
                                <h6>Following</h6>
                                <h3><span className="counter">91</span>K</h3>
                              </div>
                              <div className="col-4 col-sm-4">
                                <h6>Total Post</h6>
                                <h3><span className="counter">21</span>M</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 col-xl-4 box-col-33">
                          <div className="card custom-card">
                            <div className="card-header"><img className="img-fluid" src="../assets/images/user-card/7.jpg" alt="" /></div>
                            <div className="card-profile"><img className="rounded-circle" src="../assets/images/avtar/16.jpg" alt="" /></div>
                            <ul className="card-social">
                              <li><a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                              <li><a href="https://www.google.com" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                              <li><a href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                              <li><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
                              <li><a href="https://www.rss.com" target="_blank"><i className="fa fa-rss"></i></a></li>
                            </ul>
                            <div className="text-center profile-details"><a href="user-profile.html">
                              <h2>Johan Deo</h2></a>
                              <h6>Designer</h6>
                            </div>
                            <div className="card-footer row">
                              <div className="col-4 col-sm-4">
                                <h6>Follower</h6>
                                <h3 className="counter">2578</h3>
                              </div>
                              <div className="col-4 col-sm-4">
                                <h6>Following</h6>
                                <h3><span className="counter">26</span>K</h3>
                              </div>
                              <div className="col-4 col-sm-4">
                                <h6>Total Post</h6>
                                <h3><span className="counter">96</span>M</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 col-xl-4 box-col-33">
                          <div className="card custom-card">
                            <div className="card-header"><img className="img-fluid" src="../assets/images/user-card/5.jpg" alt="" /></div>
                            <div className="card-profile"><img className="rounded-circle" src="../assets/images/avtar/11.jpg" alt="" /></div>
                            <ul className="card-social">
                              <li><a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                              <li><a href="https://www.google.com" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                              <li><a href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                              <li><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
                              <li><a href="https://www.rss.com" target="_blank"><i className="fa fa-rss"></i></a></li>
                            </ul>
                            <div className="text-center profile-details"><a href="user-profile.html">
                              <h2>Dev John</h2></a>
                              <h6>Developer</h6>
                            </div>
                            <div className="card-footer row">
                              <div className="col-4 col-sm-4">
                                <h6>Follower</h6>
                                <h3 className="counter">6545</h3>
                              </div>
                              <div className="col-4 col-sm-4">
                                <h6>Following</h6>
                                <h3><span className="counter">91</span>K</h3>
                              </div>
                              <div className="col-4 col-sm-4">
                                <h6>Total Post</h6>
                                <h3><span className="counter">21</span>M</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 col-xl-4 box-col-33">
                          <div className="card custom-card">
                            <div className="card-header"><img className="img-fluid" src="../assets/images/user-card/6.jpg" alt="" /></div>
                            <div className="card-profile"><img className="rounded-circle" src="../assets/images/avtar/3.jpg" alt="" /></div>
                            <ul className="card-social">
                              <li><a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                              <li><a href="https://www.google.com" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                              <li><a href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                              <li><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
                              <li><a href="https://www.rss.com" target="_blank"><i className="fa fa-rss"></i></a></li>
                            </ul>
                            <div className="text-center profile-details"><a href="user-profile.html">
                              <h2>Mark Jecno</h2></a>
                              <h6>Manager</h6>
                            </div>
                            <div className="card-footer row">
                              <div className="col-4 col-sm-4">
                                <h6>Follower</h6>
                                <h3 className="counter">9564</h3>
                              </div>
                              <div className="col-4 col-sm-4">
                                <h6>Following</h6>
                                <h3><span className="counter">49</span>K</h3>
                              </div>
                              <div className="col-4 col-sm-4">
                                <h6>Total Post</h6>
                                <h3><span className="counter">96</span>M</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="photos" role="tabpanel" aria-labelledby="photos">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="card">
                            <div className="my-gallery card-body row gallery-with-description" itemscope="">
                              <figure className="col-xl-3 col-sm-6 box-col-25" itemprop="associatedMedia" itemscope=""><a href="../assets/images/big-lightgallry/01.jpg" itemprop="contentUrl" data-size="1600x950"><img src="../assets/images/lightgallry/01.jpg" itemprop="thumbnail" alt="Image description" />
                                <div className="caption">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div></a>
                                <figcaption itemprop="caption description">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </figcaption>
                              </figure>
                              <figure className="col-xl-3 col-sm-6 box-col-25" itemprop="associatedMedia" itemscope=""><a href="../assets/images/big-lightgallry/02.jpg" itemprop="contentUrl" data-size="1600x950"><img src="../assets/images/lightgallry/02.jpg" itemprop="thumbnail" alt="Image description" />
                                <div className="caption">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div></a>
                                <figcaption itemprop="caption description">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </figcaption>
                              </figure>
                              <figure className="col-xl-3 col-sm-6 box-col-25" itemprop="associatedMedia" itemscope=""><a href="../assets/images/big-lightgallry/03.jpg" itemprop="contentUrl" data-size="1600x950"><img src="../assets/images/lightgallry/03.jpg" itemprop="thumbnail" alt="Image description" />
                                <div className="caption">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div></a>
                                <figcaption itemprop="caption description">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </figcaption>
                              </figure>
                              <figure className="col-xl-3 col-sm-6 box-col-25" itemprop="associatedMedia" itemscope=""><a href="../assets/images/big-lightgallry/04.jpg" itemprop="contentUrl" data-size="1600x950"><img src="../assets/images/lightgallry/04.jpg" itemprop="thumbnail" alt="Image description" />
                                <div className="caption">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div></a>
                                <figcaption itemprop="caption description">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </figcaption>
                              </figure>
                              <figure className="col-xl-3 col-sm-6 box-col-25" itemprop="associatedMedia" itemscope=""><a href="../assets/images/big-lightgallry/05.jpg" itemprop="contentUrl" data-size="1600x950"><img src="../assets/images/lightgallry/05.jpg" itemprop="thumbnail" alt="Image description" />
                                <div className="caption">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div></a>
                                <figcaption itemprop="caption description">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </figcaption>
                              </figure>
                              <figure className="col-xl-3 col-sm-6 box-col-25" itemprop="associatedMedia" itemscope=""><a href="../assets/images/big-lightgallry/011.jpg" itemprop="contentUrl" data-size="1600x950"><img src="../assets/images/lightgallry/011.jpg" itemprop="thumbnail" alt="Image description" />
                                <div className="caption">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div></a>
                                <figcaption itemprop="caption description">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </figcaption>
                              </figure>
                              <figure className="col-xl-3 col-sm-6 box-col-25" itemprop="associatedMedia" itemscope=""><a href="../assets/images/big-lightgallry/010.jpg" itemprop="contentUrl" data-size="1600x950"><img src="../assets/images/lightgallry/010.jpg" itemprop="thumbnail" alt="Image description" />
                                <div className="caption">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div></a>
                                <figcaption itemprop="caption description">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </figcaption>
                              </figure>
                              <figure className="col-xl-3 col-sm-6 box-col-25" itemprop="associatedMedia" itemscope=""><a href="../assets/images/big-lightgallry/08.jpg" itemprop="contentUrl" data-size="1600x950"><img src="../assets/images/lightgallry/08.jpg" itemprop="thumbnail" alt="Image description" />
                                <div className="caption">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </div></a>
                                <figcaption itemprop="caption description">
                                  <h4>Portfolio Title</h4>
                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                </figcaption>
                              </figure>
                            </div>
                            {/* <!-- Root element of PhotoSwipe. Must have class pswp.--> */}
                            <div className="pswp" tabindex="-1" role="dialog" aria-hidden="true">
                              {/* <!--
                              Background of PhotoSwipe.
                              It's a separate element, as animating opacity is faster than rgba().
                              --> */}
                              <div className="pswp__bg"></div>
                              {/* <!-- Slides wrapper with overflow:hidden.--> */}
                              <div className="pswp__scroll-wrap">
                                {/* <!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory.-->
                                <!-- don't modify these 3 pswp__item elements, data is added later on.--> */}
                                <div className="pswp__container">
                                  <div className="pswp__item"></div>
                                  <div className="pswp__item"></div>
                                  <div className="pswp__item"></div>
                                </div>
                                {/* <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed.--> */}
                                <div className="pswp__ui pswp__ui--hidden">
                                  <div className="pswp__top-bar">
                                    {/* <!-- Controls are self-explanatory. Order can be changed.--> */}
                                    <div className="pswp__counter"></div>
                                    <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
                                    <button className="pswp__button pswp__button--share" title="Share"></button>
                                    <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                                    <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                                    {/* <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR-->
                                    <!-- element will get class pswp__preloader--active when preloader is running--> */}
                                    <div className="pswp__preloader">
                                      <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                          <div className="pswp__preloader__donut"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                    <div className="pswp__share-tooltip"></div>
                                  </div>
                                  <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                                  <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                                  <div className="pswp__caption">
                                    <div className="pswp__caption__center"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Container-fluid Ends--> */}
            </div>
            {/* <!-- footer start--> */}
            <footer className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-10 p-0 footer-left">
                    <p className="mb-0">Copyright 2022 © Koho theme by pixelstrap</p>
                  </div>
                  <div className="col-2 p-0 footer-right">     <i className="fa fa-heart font-danger">               </i></div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </>
      );
}