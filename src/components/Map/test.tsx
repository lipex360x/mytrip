import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const placeOne = {
      id: '1',
      name: 'PlaceOne',
      slug: 'placeone',
      location: {
        latitude: 100,
        longitude: -10
      }
    }

    const placeTwo = {
      id: '2',
      name: 'PlaceTwo',
      slug: 'placetwo',
      location: {
        latitude: 130,
        longitude: -50
      }
    }

    render(<Map places={[placeOne, placeTwo]}/>)

    expect(screen.getByTitle(/placeone/i)).toBeInTheDocument()
    expect(screen.getByTitle(/placetwo/i)).toBeInTheDocument()
  })
})
