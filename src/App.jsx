const element = (
    <div className="center">
        <div className="name">VANDANA SINGH</div>
        <img className="image" src='/images/vandanaProfilePic.png' />
        <div className="intro"> I am pursuing my Master's in Computer Science at SDSU. 
                    In the past, I have worked as Quality Assurance Engineer at HiveMedia Group, Carlsbad.
                    I am planning to get into Full Stack Web developer role after I complete my Masters.
        </div>
        <div className="button-div">
            <a className="button" href="https://github.com/vandanasdev/assignment1">VIEW MY GITHUB REPO</a>
        </div>
        
    </div>
);

ReactDOM.render(element, document.getElementById('myInfo'));