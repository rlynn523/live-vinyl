import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import store from '../src/store';
import { CreateUser } from '../src/components/createUser';

describe('CreateUser component', function() {
    it('Should Render Input Fields To Create Username And Password, And Create Button', function(){
        let renderer = TestUtils.createRenderer();
        renderer.render(<CreateUser />);
        let result = renderer.getRenderOutput();
        let createUser = result.props.children.props;
        createUser.className.should.equal('createUser');
        createUser.children[0].type.should.equal('p');
        createUser.children[0].props.className.should.equal('titleCreateUser');
        createUser.children[0].props.children.should.equal('Create Log In');
        createUser.children[1].type.should.equal('input');
        createUser.children[1].ref.should.equal('newUser');
        createUser.children[1].props.type.should.equal('text');
        createUser.children[1].props.placeholder.should.equal('Username');
        createUser.children[2].type.should.equal('input');
        createUser.children[2].ref.should.equal('newUserPassword');
        createUser.children[2].props.type.should.equal('password');
        createUser.children[2].props.placeholder.should.equal('Password');
        createUser.children[3].props.className.should.equal('signInButton');
        createUser.children[3].props.label.should.equal('Create');
    });
});
