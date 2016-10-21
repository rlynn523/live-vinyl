import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import store from '../src/store';
import { Related } from '../src/components/related';

describe('Related component', function() {
    it('Should Render List Of Related Artists', function() {
        let relatedArtists = {
            artists: [
                {
                    name: 'radiohead',
                    id: '123134'
                },
                {
                    name: 'red fang',
                    id: '123'
                },
            ]
        }
        let renderer = TestUtils.createRenderer();
        renderer.render(<Related relatedArtists={relatedArtists} />);
        let result = renderer.getRenderOutput();
        let paper = result.props.children.props;
        paper.className.should.equal('paper');

        let relatedTitle = paper.children.props.children[0];
        relatedTitle.props.className.should.equal('relatedTitle');
        relatedTitle.props.children.should.equal('Related Artists');

        let relatedList = paper.children.props.children[1];
        relatedList.type.should.equal('ul');
        relatedList.props.className.should.equal('relatedList');

        let listItem = relatedList.props;
        listItem.children[0].type.should.equal('img');
        listItem.children[1][0].type.should.equal('li');
        listItem.children[1][0].key.should.equal('123134');
        listItem.children[1][0].props.children.props.children.should.equal('radiohead');
        listItem.children[1][1].type.should.equal('li');
        listItem.children[1][1].key.should.equal('123');
        listItem.children[1][1].props.children.props.children.should.equal('red fang');
    });
});
