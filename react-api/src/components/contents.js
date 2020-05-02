import React from 'react'

const Contents = ({contents}) => {
    return (
        <div>
            <center><h1>Blog</h1></center>
            {contents.map((content) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{content.title}</h5>
			<p class="card-text">{content.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contents
