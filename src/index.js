$(function(){
			var Demo = React.createClass({
				render : function  () {
					return <div className="demo" style={{background:"#"+this.props.bg}} id={this.props.id}></div>;
				}
			});
			var One = React.createClass({
				text : "",
				random:(function(){
					return Math.floor(Math.random()*100000);
				})(),
				getInitialState:function(){
					this.text="112233";
					return {
						bg:"112233",
						code : "background:#112233;"
					}
				},
				test:function(){
					var reg = new RegExp(this.props.reg,"i");
					return reg.test(this.text);
				},
				changeState:function(){
					if(this.test()){
						this.setState({bg:this.text,code:"background:#"+this.text+";"})
					}else{
						this.setState({code:this.props.error})
					}
					
				},
				onchange:function(event){
					this.text = event.target.value;
				},
				render:function(){
					return (<div className="one" >
						<div className="title" reg={this.props.reg} error={this.props.error}>{this.props.title}</div>
						<div className="main">
							<Demo bg={this.state.bg} id={"demo_"+this.random}/>
							<div className="op">
								<div>输入颜色( 16进制):
									<input type="text"  defaultValue={this.state.bg}  onChange={this.onchange}/>
									<button onClick={this.changeState}>确定</button>
								</div>
								<div>代码:<div className="code">{this.state.code}</div></div>
							</div>
						</div>
					</div>);
				}
			});
			console.log(1)
			ReactDOM.render(<One bg="000" error="请输入正确的十六进制颜色值，如000｜2233dd" reg="(^[0-9a-f]{6})$|(^[0-9a-f]{3}$)" title="纯色背景"/>,document.getElementById('container'));
		});