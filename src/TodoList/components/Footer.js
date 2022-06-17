import React from 'react'
import PropTypes from 'prop-types'
import { VisibilityFilters } from '../actions'
import FilterLink from '../containers/FilterLink'

const Footer = props => {
  return (
    <div>
        <span>Show:</span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Complted</FilterLink>
    </div>
  )
}

export default Footer