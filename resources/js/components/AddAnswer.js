import React from 'react';

function AddAnswer({ answer, setAnswer, type, setType, kk }) {
	return (
		<>
			<div key={kk} className="row align-items-center px-3 py-2">
				<div className="col-lg-1 col-2">
					<div className="text-lg-center text-left">
						<span><i className="far fa-bars text-secondary"></i></span>
					</div>
				</div>
				<div className="mb-lg-0 mb-2 col-lg-7 col-10 pl-0">
					<div className="w-50 bg-white w-100 px-2 py-1 rounded bd-bt">
						<input type="text" placeholder="Answer" key={kk} onChange={e => setAnswer(e.target.value)} name="answer" className='inputstyle' />
					</div>
				</div>
				<div className="col-lg-2 col-6">
					<form>
						<div className="form-check">
							<input className="form-check-input" key={kk}  type="radio"  name="ansType" onChange={e => setType(e.target.value)} id="" />
							<label className="form-check-label" htmlFor="">Right answer</label>
						</div>
					</form>
				</div>
				<div className="col-lg-2 col-6">
					<div className="text-right">
						<i className="far fa-trash-alt text-secondary bg-white border p-2 rounded"></i>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddAnswer;
