function Layout (props) {
    return(
        <div>
            <div>{props.header}</div>
            <div className="container">
                <div>{props.menu}</div>
                 <div>{props.content}</div>
            </div>
            <div>{props.footer}</div>
        </div>
    );

}

export default Layout;