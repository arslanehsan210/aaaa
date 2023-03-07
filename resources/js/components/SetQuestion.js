
import React from 'react';
import { useState, useEffect } from 'react';
import AddAnswer from './AddAnswer';
useState
function SetQuestion({ question, setQuestion, answer, setAnswer, type, setType, kk }) {
	const [aList, setAList] = useState([]);

	
	const addAnswer = (e) => {
		e.preventDefault();
		const ram = Math.floor(Math.random() * 11);
		setAList(aList.concat(ram));

		// console.log(aList);
	}
	return (
		<>
			<div key={kk} className="bg-white rounded border mb-3" style={{ overflow: 'hidden' }}>
				<div className="row align-items-center py-3 px-lg-0 px-3" style={{ background: '#eceef1' }}>
					<div className="col-lg-1 col-2">
						<div className="text-lg-center text-left">
							<span><i className="far fa-bars text-secondary"></i></span>
						</div>
					</div>
					<div className="col-lg-7 pl-0 col-10">
						<div className="mb-lg-0 mb-2 w-50 bg-white w-100 px-2 py-1 rounded bd-bt">
							<input type="text" key={kk} placeholder="How it works?"  onChange={e => setQuestion(e.target.value)} name="question" className='inputstyle' />
						</div>
					</div>
					<div className="col-lg-2 col-6">
						<form>
							<div className="form-check">
								<input key={kk} className="form-check-input" type="checkbox" value="" id="" />
								<label className="form-check-label" htmlFor="">Mandatory</label>
							</div>
						</form>
					</div>
					<div className="col-lg-2 col-6">
						<div className="text-lg-left text-right">
							<i className="fas fa-copy text-secondary bg-white border p-2 rounded"></i>
							<i className="far fa-trash-alt text-secondary bg-white border p-2 rounded"></i>
						</div>
					</div>
				</div>

				{aList.map((list, index) => {
					return <AddAnswer key={index} kk={index} answer={answer} setAnswer={setAnswer}
						type={type} setType={setType}
					/>;
				})}

				<div className="row px-3 py-2">
					<button className="btn btn-white border ml-5" onClick={addAnswer}><i className="fal fa-plus mr-3"></i>add reply</button>
				</div>
			</div>
		</>
	);
}

export default SetQuestion;
