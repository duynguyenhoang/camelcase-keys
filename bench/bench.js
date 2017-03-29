/* globals bench suite set */
'use strict';
const camelcaseKeysNpm = require('camelcase-keys');
const camelcaseKeys = require('..');
const fixture = require('./fixture');

suite('camelcaseKeys', () => {
	set('mintime', 1000);

	bench('npm', () => {
		camelcaseKeysNpm(fixture, {deep: true});
	});

	bench('master', () => {
		camelcaseKeys(fixture, {deep: true});
	});
});
