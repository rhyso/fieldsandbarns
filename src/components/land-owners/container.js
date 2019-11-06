import { connect } from 'react-redux'
import {simpleAction} from "../../actions/simpleAction";
import { LandOwners } from './land-owners'

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(LandOwners);
