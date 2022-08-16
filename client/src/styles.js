import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
    },
    [theme.breakpoints.down('xs')]: {
        heading: {
            color: 'rgba(0,183,255, 1)',
            fontSize: '2.0rem'
        },
        mainContainer: {
            flexDirection: "column-reverse"
        }
    },
}));