import React from 'react' 

function Actions(props){
    return(
		props.actions.map((action, idx) => {
			return (
				<li className="nav-item" key={idx}>
					<a className="nav-link collapsed" href="/">
						<i className={`fas fa-fw fa-${action.icon}`}></i>
						<span>{action.title}</span>
					</a>
				</li>
			)
		})		
    )
}

export default Actions

