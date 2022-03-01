// import { connect } from "react-redux";
import { connect } from "react-redux";
import Form from "../../Fragments/Form";
import { changeLocation } from "../../services/Location/actions";


const mapStateToProps = (state) => ({
    location: state.location
});

const mapDispatchToProps = (dispatch) => ({
    changeLocation: (newLocation) => dispatch(changeLocation(newLocation))
});

// export default connect(mapStateToProps, mapDispatchToProps)(Form);
