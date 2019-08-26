// App.js
import {setLoading, setUser} from "../actions";
import UsersService from "../services/UsersService";

render()
{
    return (
        <Provider store={store}>
            <Proxy/>
        </Provider>
    );
}
// ...

// Proxy.js
render()
{
    const {navigation} = this.props;
    StackNavigatorService.setNavigator(navigation);

    return (
        <React.Fragment>
            {
                this.props.loading ?
                    (
                        <Modal>
                            <View style={styles.loader}>
                                <Animatable.Image
                                    animation={loaderAnimation}
                                    easing="ease-out"
                                    iterationCount="infinite"
                                    source={require('./assets/loader.png')}
                                    style={{height: 50, width: 50}}
                                />
                                <Text style={styles.loaderText}>{I18n.t('general.loading')}</Text>
                            </View>
                        </Modal>
                    ) : null
            }
            <MainNavigator navigation={this.props.navigation}/>
        </React.Fragment>
    )
}
// ...

// TestUploadPhoto.js
const mapStateToProps = state => {
    return {
        lang: state.lang.lang,
        user: state.auth.user,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setUser: (user) => dispatch(setUser(user)),
        setLoading: (status) => dispatch(setLoading(status))
    }
};

uploadPhoto() {
    this.props.setLoading(true);
    UsersService.updatePhoto(this.props.user, this.state.photo).then(() => {
        this.props.setUser({...this.props.user});
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        this.props.setLoading(false);
    });
}
// ...
