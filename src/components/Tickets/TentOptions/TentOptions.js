import "./_TentOptions.scss";

function TentOptions() {
	return (
		<section className="section_p tents">
			<h2>Choose your tent option</h2>
			<form>
				<fieldset>
					<input type="radio" name="tent" id="own_tent" value={1} defaultChecked />
					<label htmlFor="own_tent">
						Bring own tent <span>free</span>
					</label>
				</fieldset>

				<fieldset>
					<input type="radio" name="tent" id="green" value={2} />
					<label htmlFor="green">
						Green Camping <span>+249,-</span>
					</label>
				</fieldset>

				<fieldset>
					<input type="radio" name="tent" id="crew" value={3} />
					<label htmlFor="crew">
						Crew set up <span>+299,- / 399,-</span>
					</label>
				</fieldset>
			</form>
		</section>
	);
}

export default TentOptions;
