import React from "react";

interface Props {
  infos: {
    name: string;
    font: string[];
  };
}

class HoverLink extends React.Component<Props> {
  convertStringToArray(name:string) {
    let nameArray = name.split("");
    return nameArray;
  }

  component() {
    return this.convertStringToArray(this.props.infos.name).map((letter, index) => {
      const style = {
                      "--i": index + 1,
                      "--t": this.props.infos.name.length + 1
                    } as React.CSSProperties;

      const styleFont = {
                          "--f": this.props.infos.font[0],
                          "--u": this.props.infos.font[1]
                        } as React.CSSProperties;

      if (letter !== " ") {
        return  <div key={index} className="h" style={style}>
                  <span style={styleFont}>{letter}</span>
                </div>;
      } else {
        return  <div key={index} className="h" style={style}>
                  <span style={styleFont}>&nbsp;</span>
                </div>;
      }
    });
  }

  render() {
    return (
      <div className="hoverLink">
        {this.component()}
      </div>
    );
  }
}

export default HoverLink;
