'use client'

import React from "react"
import Image from "next/image"
import css from "./style.module.css"
import imageGithub from "./github_icon.png" 

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
        <>  
            
            <div className={[css.div__component_wrap, (props.mini && css.mini)].join(" ")}>
                <a href={`https://github.com/${props.username}/`} rel="noreferrer" target="_blank" className={css.button}>
                    <div className={css.div__imageCont}>
                        <Image src={imageGithub} alt="Logo github" fill />
                    </div>
                    <span>
                        {!props.mini && props.value}
                    </span>
                </a>
                {props.bubble ? <div className={css.bubble}><span>{numRepos}</span></div> : ""}
            </div>
        </>
    )
}