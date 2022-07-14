import React from "react"
import css from "./style.module.css"

export default function GithubButton(props){


    return (
        <div className={css.div__component_wrap}>
            <a href={props.url} rel="noreferrer" target="_blank" className={css.button}>{props.value}</a>
            {props.bubble && <div class={css.bubble}>25</div>}
        </div>
    )
}