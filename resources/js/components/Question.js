import React from 'react';

function Question() {
    return (
        <>
        	<div className="form-group border rounded shadow mb-3">
						<div className="form-row px-3 py-2">
							<div className="col-sm-10 col-9">
								<label className="label-1">1. To activate the cursor that selects all the images in timeline, just click on the key:</label>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="first" id="" value=""/>
									<label className="form-check-label new-label" htmlFor="">
										C 
									</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="first" id="" value=""/>
									<label className="form-check-label new-label" htmlFor="">
										A
									</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="first" id="" value=""/>
									<label className="form-check-label new-label" htmlFor="">
										V
									</label>
								</div>
							</div>
							<div className="col-sm-2 col-3">
								<div className="text-center">
									<span className="mt-2 badge badge-pill badge-purp">Mandatory</span>
								</div>
							</div>
						</div>
					</div>
    </>
    );
}

export default Question;
