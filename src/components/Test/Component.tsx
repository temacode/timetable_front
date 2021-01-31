import React from 'react';

const Component = props => (
    <div props={ props }>

    </div>
);

class ClassComponent extends React.Component {
    componentDidUpdate() {
        console.log(this.props);
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

const Lol = () => (
    <Component>
        <ClassComponent></ClassComponent>
    </Component>
);

export default Lol;