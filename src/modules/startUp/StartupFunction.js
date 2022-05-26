export function redirectAnotherpage(props) {
    if (props.email != "" || props.password != "") {
        props.navigation.navigate('ButtomNavigation');
    } else {
        props.navigation.navigate('Login');
    }
}
