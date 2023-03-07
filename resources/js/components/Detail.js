import React from 'react';
import Question from './Question';

function Detail() {
    return (
        <>
        <div className="container">
		<div className="row justify-content-center mt-3">
			<div className="col-md-7">
				<form>
				
                <Question name="arslan"/>
                <Question name="ali" />
                <Question name="yousuf" />
				
					<div className="form-group text-right">
						<button className="btn btn-purp text-white">To Send</button>
					</div>
				</form>
			</div>
		</div>
	</div>
    </>
    );
}

export default Detail;
