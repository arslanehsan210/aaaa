import React from 'react';
import { useState, useEffect } from 'react';
import SetQuestion from './SetQuestion';
import axios from 'axios';

function Detail() {

	const [qList, setQList] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [question, setQuestion] = useState([]);
	const [answer, setAnswer] = useState([]);
	const [type, setType] = useState([]);
	useEffect(() => {
		
	}, [])

	const submitData = (e) => {
		const qArr = [];
		const aArr = [];
		e.preventDefault();
		qArr.push(question);
		aArr.push(answer);
		const data = {
			title: title,
			description: description,
			question: qArr,
			answer: aArr
		};
		axios.post(`http://127.0.0.1:8000/api/formSubmit`, { data })
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
		nullvalues();
	}

	const nullvalues = () => {
		setAnswer('');
		setDescription('');
		setQuestion([]);
		setTitle([]);
	}

	const newquestion = (e) => {
		e.preventDefault();
		const ram = Math.floor(Math.random() * 11);
		setQList(qList.concat(ram));
	}

	return (
		<>
			<div className="container bg-light py-3">
				<form>
					<div className="row mb-5">
						<div className="col-md-6">
							<div>
								<p><i className="fas fa-arrow-left mr-3"></i><span className="first-p">create new quiz</span></p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="text-right">
								<button className="btn btn-white border"  >save as draft</button>
								<button className="btn btn-purp text-white" onClick={submitData}>create and publish</button>
							</div>
						</div>
					</div>
					<div className="row mb-5">
						<div className="col-md-4">
							<div>
								<p className="fw-5">Details</p>
							</div>
						</div>
						<div className="col-md-8">
							<div className="bg-white p-3 rounded">
								<form className="">
									<div className="form-group">
										<label>Title</label>
										<input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
									</div>
									<div className="form-group">
										<label>Description</label>
										<textarea className="form-control" value={description} name="description" onChange={e => setDescription(e.target.value)}></textarea>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="row mb-5">
						<div className="col-md-4">
							<div>
								<p className="fw-5 mb-0">Questions</p>
								<small>Learn more about the <u className="bg-purp">quiz</u></small>
							</div>
						</div>
						<div className="col-md-8">
							<div className="text-right mb-3">
								<button className="btn btn-white border" id="click" onClick={newquestion}><i className="fal fa-plus mr-3"></i>add question</button>
							</div>

							{qList.map((list, index) => {
								return <SetQuestion key={index} kk={index} question={question} setQuestion={setQuestion} answer={answer} setAnswer={setAnswer} type={type} setType={setType} />;
							})}


							<div className="text-right mb-3">
								<button className="btn btn-white border" onClick={newquestion}><i className="fal fa-plus mr-3"></i>add question</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default Detail;


