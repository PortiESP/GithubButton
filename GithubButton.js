import React from "react"
import css from "./style.module.css"

export default function GithubButton(props){

    const [numRepos, setNumRepos] = React.useState(0)

    React.useEffect( ()=>{
        async function fetchData(){
            const accountData = await fetch(`https://api.github.com/users/${props.username}`).then( res => res.json() )
            // Use data
            setNumRepos(accountData.public_repos)
        }
        
        
        fetchData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    } ,[])
    

    return (
        <div className={css.div__component_wrap}>
            <a href={`https://github.com/${props.username}/`} rel="noreferrer" target="_blank" className={[css.button, css.mini].join(" ")}>{!props.mini && props.value}</a>
            {props.bubble ? <div className={css.bubble}><span>{numRepos}</span></div> : ""}
        </div>
    )
}