import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import store from '../src/store';
import { Search } from '../src/components/search';
describe('Search component', function() {
    it('Should Render Input Field and Search Button', function() {
        let renderer = TestUtils.createRenderer();
        renderer.render(<Search />);
        let result = renderer.getRenderOutput();
        let search = result.props.children.props;
        search.className.should.equal('bandSearch');
        search.children[0].type.should.equal('p');
        search.children[0].props.className.should.equal('searchTitle');
        search.children[0].props.children.should.equal('Search An Artist');
        search.children[1].type.should.equal('input');
        search.children[1].ref.should.equal('userSearch');
        search.children[1].props.type.should.equal('text');
        search.children[1].props.placeholder.should.equal(' ex: Radiohead');
        search.children[2].props.label.should.equal('Search Artist');
    });
});
