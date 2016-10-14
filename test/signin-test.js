import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import store from '../src/store';
import { SignIn } from '../src/components/signin';

describe('SignIn component', function() {
    it('Should Render Username And Password Input Fields, And A Sign In Button', function() {
        let renderer = TestUtils.createRenderer();
        renderer.render(<SignIn />);
        let result = renderer.getRenderOutput();
        let signIn = result.props.children.props;
        signIn.className.should.equal('signIn');
        signIn.children[0].type.should.equal('p');
        signIn.children[0].props.className.should.equal('titleSignIn');
        signIn.children[0].props.children.should.equal('Sign In');
        signIn.children[1].type.should.equal('input');
        signIn.children[1].ref.should.equal('userName');
        signIn.children[1].props.type.should.equal('text');
        signIn.children[1].props.placeholder.should.equal('Username');
        signIn.children[2].type.should.equal('input');
        signIn.children[2].ref.should.equal('userPassword');
        signIn.children[2].props.type.should.equal('password');
        signIn.children[2].props.placeholder.should.equal('Password');
        signIn.children[3].props.className.should.equal('signInButton');
        signIn.children[3].props.label.should.equal('Sign In');
    });
});
