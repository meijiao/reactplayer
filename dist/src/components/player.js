"use strict";

var Player = React.createClass({
  displayName: "Player",

  render: function render() {
    return React.createElement("audio", { className: "audioPlayer", controls: true, autoPlay: true, src: this.props.url });
  }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BsYXllci5qc3giXSwibmFtZXMiOlsiUGxheWVyIiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsInJlbmRlciIsInByb3BzIiwidXJsIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVNDLE1BQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDN0JDLFVBQVEsa0JBQVc7QUFDakIsV0FDRSwrQkFBTyxXQUFVLGFBQWpCLEVBQStCLGNBQS9CLEVBQXdDLGNBQXhDLEVBQWlELEtBQUssS0FBS0MsS0FBTCxDQUFXQyxHQUFqRSxHQURGO0FBR0Q7O0FBTDRCLENBQWxCLENBQWIiLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBsYXllciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGF1ZGlvIGNsYXNzTmFtZT1cImF1ZGlvUGxheWVyXCIgY29udHJvbHMgYXV0b1BsYXkgc3JjPXt0aGlzLnByb3BzLnVybH0vPlxuICAgIClcbiAgfVxuICBcbn0pO1xuIl19