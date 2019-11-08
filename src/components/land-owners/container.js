import { connect } from 'react-redux'
import { getLandOwners } from '../../reducers/landOwners'
import { LandOwners } from './land-owners'

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => ({
    getLandOwners: () => dispatch(getLandOwners)
})

export default connect(mapStateToProps, mapDispatchToProps)(LandOwners);
