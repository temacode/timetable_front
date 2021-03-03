import React from 'react';

const Component = () => (
    <div>

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
    <Component/>
);

export default Lol;
