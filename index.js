$(function () {
	var Demo = React.createClass({
		displayName: "Demo",

		render: function () {
			return React.createElement("div", { className: "demo", style: { background: "#" + this.props.bg }, id: this.props.id });
		}
	});
	var One = React.createClass({
		displayName: "One",

		text: "",
		random: (function () {
			return Math.floor(Math.random() * 100000);
		})(),
		getInitialState: function () {
			this.text = "112233";
			return {
				bg: "112233",
				code: "background:#112233;"
			};
		},
		test: function () {
			var reg = new RegExp(this.props.reg, "i");
			return reg.test(this.text);
		},
		changeState: function () {
			if (this.test()) {
				this.setState({ bg: this.text, code: "background:#" + this.text + ";" });
			} else {
				this.setState({ code: this.props.error });
			}
		},
		onchange: function (event) {
			this.text = event.target.value;
		},
		render: function () {
			return React.createElement(
				"div",
				{ className: "one" },
				React.createElement(
					"div",
					{ className: "title", reg: this.props.reg, error: this.props.error },
					this.props.title
				),
				React.createElement(
					"div",
					{ className: "main" },
					React.createElement(Demo, { bg: this.state.bg, id: "demo_" + this.random }),
					React.createElement(
						"div",
						{ className: "op" },
						React.createElement(
							"div",
							null,
							"输入颜色( 16进制):",
							React.createElement("input", { type: "text", defaultValue: this.state.bg, onChange: this.onchange }),
							React.createElement(
								"button",
								{ onClick: this.changeState },
								"确定"
							)
						),
						React.createElement(
							"div",
							null,
							"代码:",
							React.createElement(
								"div",
								{ className: "code" },
								this.state.code
							)
						)
					)
				)
			);
		}
	});
	console.log(1);
	ReactDOM.render(React.createElement(One, { bg: "000", error: "请输入正确的十六进制颜色值，如000｜2233dd", reg: "(^[0-9a-f]{6})$|(^[0-9a-f]{3}$)", title: "纯色背景" }), document.getElementById('container'));
});
