import s from './Loader.module.css'

export const Loader = () => <div className={s.loader}>
    <svg xmlns="http://www.w3.org/2000/svg"
         style={{margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto', width:'204px', height:'204px'}}
         viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <path d="M24 50A26 26 0 0 0 76 50A26 28 0 0 1 24 50" fill="#512de4" stroke="none">
            <animateTransform attributeName="transform" type="rotate" dur="1.1363636363636365s" repeatCount="indefinite"
                              keyTimes="0;1" values="0 50 51;360 50 51"/>
        </path>
      </svg>

</div>

