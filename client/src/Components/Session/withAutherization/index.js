import React from 'react';

import { withFirebase } from '../../Firebase';

const withAuthorization = isAuth => Component => {
  class withAuthorization extends React.Component{

    componentDidMount(){
      // this.listener = this.props.firebase.auth.onAuthStateChanged(
      //   authUser => {
      //     if(authUser){
      //       console.log(88);
      //       console.log(isAuth(authUser));
      //     } else{
      //       console.log(99);
      //     }
      //   }
      // );
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          if(!isAuth(authUser)) this.props.history.push('/login')
        }
      );
    }

    // componentWillUnmount() {
    //   this.listener();
    // }

    render(){
      return <Component {...this.props} />
    }
  }

  return withFirebase(withAuthorization);
}

export default withAuthorization;

