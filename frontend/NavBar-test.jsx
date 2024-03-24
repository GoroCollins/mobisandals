// Generated by CodiumAI

describe('NavBar', () => {

    // Renders a Navbar component with a dark background and a tertiary body color.
    it('should render a Navbar component with a dark background and a tertiary body color', () => {
      // Arrange

      // Act
      const wrapper = shallow(<NavBar />);

      // Assert
      expect(wrapper.find(Navbar).prop('bg')).toBe('dark');
      expect(wrapper.find(Navbar).prop('className')).toBe('bg-body-tertiary');
    });

    // None of the components render if the function is not called inside a parent component.
    it('should not render any components if the function is not called inside a parent component', () => {
      // Arrange

      // Act
      const wrapper = shallow(<NavBar />);

      // Assert
      expect(wrapper.find(Navbar)).toHaveLength(0);
      expect(wrapper.find(Nav)).toHaveLength(0);
      expect(wrapper.find(NavDropdown)).toHaveLength(0);
      expect(wrapper.find(LinkContainer)).toHaveLength(0);
    });
});
