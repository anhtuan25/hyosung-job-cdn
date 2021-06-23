import React from 'react';

const CandidatePage = () => {

    return (
        <>
            <main>
                <div id="form_container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div id="left_form">
                                <figure><img src="img/registration_bg.svg" alt="" /></figure>
                                <h2>Registration</h2>
                                <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>
                                <a href="#0" id="more_info" data-toggle="modal" data-target="#more-info"><i className="pe-7s-info" /></a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div id="wizard_container">
                                <div id="top-wizard">
                                    <div id="progressbar" />
                                </div>
                                {/* /top-wizard */}
                                <form name="example-1" id="wrapped" method="POST">
                                    <input id="website" name="website" type="text" defaultValue />
                                    {/* Leave for security protection, read docs for details */}
                                    <div id="middle-wizard">
                                        <div className="step">
                                            <h3 className="main_question"><strong>1/3</strong>Please fill with your details</h3>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" name="firstname" className="form-control required" placeholder="First name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" name="lastname" className="form-control required" placeholder="Last name" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /row */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="email" name="email" className="form-control required" placeholder="Your Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" name="telephone" className="form-control" placeholder="Your Telephone" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /row */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" name="age" className="form-control" placeholder="Age" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group radio_input">
                                                        <label><input type="radio" defaultValue="Male" defaultChecked name="gender" className="icheck" />Male</label>
                                                        <label><input type="radio" defaultValue="Female" name="gender" className="icheck" />Female</label>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /row */}
                                        </div>
                                        {/* /step*/}
                                        <div className="step">
                                            <h3 className="main_question"><strong>2/3</strong>Please fill with additional info</h3>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" name="address" className="form-control required" placeholder="Address" />
                                                    </div>
                                                </div>
                                                {/* /col-sm-12 */}
                                            </div>
                                            {/* /row */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" name="city" className="form-control required" placeholder="City" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <input type="text" name="zip_code" className="form-control required" placeholder="Zip code" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /row */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <div className="styled-select">
                                                            <select className="required" name="country">
                                                                <option value selected>Select your country</option>
                                                                <option value="Europe">Europe</option>
                                                                <option value="Asia">Asia</option>
                                                                <option value="North America">North America</option>
                                                                <option value="South America">South America</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /row */}
                                        </div>
                                        {/* /step*/}
                                        <div className="submit step">
                                            <h3 className="main_question"><strong>3/3</strong>Send an optional message</h3>
                                            <div className="form-group">
                                                <textarea name="additional_message" className="form-control" style={{ height: '150px' }} placeholder="Hello world....write your messagere here!" defaultValue={""} />
                                            </div>
                                            <div className="form-group terms">
                                                <input name="terms" type="checkbox" className="icheck required" defaultValue="yes" />
                                                <label>Please accept <a href="#" data-toggle="modal" data-target="#terms-txt">terms and conditions</a> ?</label>
                                            </div>
                                        </div>
                                        {/* /step*/}
                                    </div>
                                    {/* /middle-wizard */}
                                    <div id="bottom-wizard">
                                        <button type="button" name="backward" className="backward">Backward </button>
                                        <button type="button" name="forward" className="forward">Forward</button>
                                        <button type="submit" name="process" className="submit">Submit</button>
                                    </div>
                                    {/* /bottom-wizard */}
                                </form>
                            </div>
                            {/* /Wizard container */}
                        </div>
                    </div>{/* /Row */}
                </div>{/* /Form_container */}
            </main>
            

        </>
    );
};

export default CandidatePage;
