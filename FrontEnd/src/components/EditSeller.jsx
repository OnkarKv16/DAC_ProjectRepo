import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productvalidation from "./productvalidation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import swal from 'sweetalert';

function EditSeller() {
    return (
        <div className="container">
            <div className="card shadow  mt-3 text-black">
                <div className="card-body">
                    <div className="row">
                    <div className="col-3 ">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3534/3534138.png"
                        className="rounded-start img-fluid mt-5"
                        style={{ width: "300px" }} />
                </div>
                        <div className="col-sm-6 mx-auto">
                            <h4 className="text-center p-2">
                                Seller Registration Form
                            </h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-user-circle-o pr-2"></i>Seller Name</label>
                                    <div className="col-sm-8">
                                        <input type="text"
                                            name="name"
                                            value={seller.name}
                                            onChange={handleInput}
                                            placeholder="Enter Your Name"
                                            className="form-control" />
                                        {errors.name && <medium className="text-danger float-right">{errors.name}</medium>}
                                    </div>

                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-address-card pr-2"></i>City</label>
                                    <div className="col-sm-8">
                                        <input type="text"
                                            name="city"
                                            value={seller.city}
                                            placeholder="Enter city Name"
                                            onChange={handleInput}
                                            className="form-control" />
                                        {errors.city && <medium className="text-danger float-right">{errors.city}</medium>}
                                    </div>
                                </div>

                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-envelope pr-2"></i>Email</label>
                                    <div className="col-sm-8">
                                        <input type="text"
                                            name="email"
                                            value={seller.email}
                                            placeholder="Enter Your E-mail"
                                            onChange={handleInput}
                                            className="form-control" />
                                        {errors.email && <medium className="text-danger float-right">{errors.email}</medium>}
                                    </div>

                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-phone pr-2"></i>Phone</label>
                                    <div className="col-sm-8">
                                        <input type="number"
                                            maxLength="10"
                                            minLength="10"
                                            name="phone"
                                            placeholder="Enter mobile number"
                                            value={seller.phone}
                                            onChange={handleInput}
                                            className="form-control" />
                                        {errors.phone && <medium className="text-danger float-right">{errors.phone}</medium>}
                                    </div>

                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-unlock-alt pr-2"></i>Password</label>
                                    <div className="col-sm-8">
                                        <input type="password"
                                            name="password"
                                            placeholder="confirm password"
                                            value={seller.password}
                                            onChange={handleInput}
                                            className="form-control" />
                                        {errors.password && <medium className="text-danger float-right">{errors.password}</medium>}
                                    </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label"><i className="fa fa-unlock pr-2"></i>Confirm Password</label>
                                    <div className="col-sm-8">
                                        <input type="password"
                                            name="cpassword"
                                            value={seller.cpassword}
                                            placeholder=" Re-confirm password"
                                            onChange={handleInput}
                                            className="form-control" />
                                        {errors.cpassword && <medium className="text-danger float-right">{errors.cpassword}</medium>}
                                    </div>

                                </div>
                                <div className="text-center ml-auto ">
                                    <Link className="text-white" to="/slogin">Already have an account?</Link>
                                </div>
                                <button className="btn btn-primary w-100 mt-3">Register Now</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditSeller;
