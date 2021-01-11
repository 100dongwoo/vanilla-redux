import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
function Detail({ toDo }) {
    const id = useParams();
    console.log(toDo);
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h5>Createed at : {toDo?.id}</h5>
        </>
    );
}
const mapStateToProps = (state, ownProps) => {
    const {
        match: {
            params: { id },
        },
    } = ownProps;
    return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
};
export default connect(mapStateToProps)(Detail);
