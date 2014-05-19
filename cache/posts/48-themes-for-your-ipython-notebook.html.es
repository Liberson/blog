
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>OK, a short post to give you some material to play with over the weekend ;-).</p>
<p>Today, I woke up early and whereas I was drinking a <em>mate</em> (a native drink here in Argentina) for breakfast, I remember a tweet from <a href="https://twitter.com/nsonnad">Nikhil Sonnad</a> where I was mentioned:</p>
<!-- TEASER_END -->

<p><blockquote class="twitter-tweet" data-partner="tweetdeck"><p>Sent PR to base16 for IPython notebook colorschemes. Check them out at <a href="https://t.co/SBbwBfLGli"><a href="https://t.co/SBbwBfLGli">https://t.co/SBbwBfLGli</a></a> cc <a href="https://twitter.com/oceankidbilly">@oceankidbilly</a> <a href="https://twitter.com/damian_avila">@damian_avila</a></p>&mdash; Nikhil Sonnad (@nsonnad) <a href="https://twitter.com/nsonnad/statuses/454996539992059905">April 12, 2014</a></blockquote></p>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<p>Essentially, he made available 48 <strong>IPython notebook</strong> themes based in the <strong>base16</strong> color scheme generator. Thanks Nikhil for your work!!!</p>
<p>Well, I want to try them all and quickly, so I wrote some little code to do it:</p>
<p>First, some imports...</p>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">
In&nbsp;[1]:
</div>
<div class="inner_cell">
<div class="input_area">
<div class="highlight"><pre><span class="kn">import</span> <span class="nn">os</span>
<span class="kn">import</span> <span class="nn">subprocess</span>
<span class="kn">import</span> <span class="nn">urllib</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
&nbsp;&nbsp;Click me to hide the output, if the is one ;-)</i>
</div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Second, make a list with all the theme names...</p>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">
In&nbsp;[2]:
</div>
<div class="inner_cell">
<div class="input_area">
<div class="highlight"><pre><span class="n">theme_names</span> <span class="o">=</span> <span class="p">[</span><span class="s">&#39;3024-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;3024-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;atelierdune-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;atelierdune-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;atelierforest-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;atelierforest-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;atelierheath-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;atelierheath-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;atelierlakeside-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;atelierlakeside-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;atelierseaside-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;atelierseaside-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;bespin-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;bespin-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;chalk-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;chalk-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;default-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;default-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;eighties-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;eighties-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;grayscale-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;grayscale-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;greenscreen-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;greenscreen-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;isotope-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;isotope-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;londontube-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;londontube-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;marrakesh-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;marrakesh-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;mocha-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;mocha-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;monokai-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;monokai-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;ocean-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;ocean-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;paraiso-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;paraiso-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;railscasts-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;railscasts-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;shapeshifter-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;shapeshifter-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;solarized-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;solarized-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;tomorrow-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;tomorrow-light&#39;</span><span class="p">,</span>
               <span class="s">&#39;twilight-dark&#39;</span><span class="p">,</span>
               <span class="s">&#39;twilight-light&#39;</span><span class="p">]</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
&nbsp;&nbsp;Click me to hide the output, if the is one ;-)</i>
</div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>The themes are <code>css</code> files, so we can create a new profile for each theme and add the css content to the <code>custom.css</code> file inside each profile.
To do it, I use some little magic <em>tricks</em> from <strong>IPython</strong>...</p>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">
In&nbsp;[3]:
</div>
<div class="inner_cell">
<div class="input_area">
<div class="highlight"><pre><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">theme_names</span><span class="p">:</span>
    <span class="err">!</span><span class="n">ipython</span> <span class="n">profile</span> <span class="n">create</span> <span class="err">$</span><span class="n">i</span>
    <span class="n">profile_dir</span> <span class="o">=</span> <span class="err">!</span><span class="n">ipython</span> <span class="n">locate</span> <span class="n">profile</span> <span class="err">$</span><span class="n">i</span>
    <span class="n">url</span> <span class="o">=</span> <span class="s">&quot;https://raw.githubusercontent.com/nsonnad/base16-ipython-notebook/master/base16-&quot;</span> <span class="o">+</span> <span class="n">i</span> <span class="o">+</span> <span class="s">&quot;.css&quot;</span>
    <span class="n">tgt</span> <span class="o">=</span> <span class="n">os</span><span class="o">.</span><span class="n">path</span><span class="o">.</span><span class="n">join</span><span class="p">(</span><span class="n">profile_dir</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="s">&#39;static&#39;</span><span class="p">,</span> <span class="s">&#39;custom&#39;</span><span class="p">,</span> <span class="s">&quot;custom.css&quot;</span><span class="p">)</span>
    <span class="n">urllib</span><span class="o">.</span><span class="n">urlretrieve</span> <span class="p">(</span><span class="n">url</span><span class="p">,</span> <span class="n">tgt</span><span class="p">)</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
&nbsp;&nbsp;Click me to hide the output, if the is one ;-)</i>
</div>
</div>
</div>

<div class="output_wrapper output_hidden">
<div class="output">

<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt"></div>
<div class="output_subarea output_stream output_stdout output_text">
<pre>
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_3024-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_3024-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_3024-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_3024-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_3024-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_3024-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierdune-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierdune-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierdune-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierdune-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierdune-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierdune-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierforest-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierforest-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierforest-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierforest-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierforest-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierforest-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierheath-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierheath-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierheath-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierheath-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierheath-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierheath-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierlakeside-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierlakeside-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierlakeside-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierlakeside-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierlakeside-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierlakeside-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierseaside-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierseaside-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierseaside-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierseaside-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierseaside-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_atelierseaside-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_bespin-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_bespin-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_bespin-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_bespin-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_bespin-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_bespin-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_chalk-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_chalk-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_chalk-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_chalk-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_chalk-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_chalk-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_default-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_default-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_default-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_default-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_default-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_default-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_eighties-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_eighties-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_eighties-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_eighties-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_eighties-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_eighties-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_grayscale-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_grayscale-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_grayscale-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_grayscale-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_grayscale-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_grayscale-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_greenscreen-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_greenscreen-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_greenscreen-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_greenscreen-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_greenscreen-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_greenscreen-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_isotope-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_isotope-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_isotope-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_isotope-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_isotope-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_isotope-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_londontube-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_londontube-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_londontube-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_londontube-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_londontube-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_londontube-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_marrakesh-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_marrakesh-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_marrakesh-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_marrakesh-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_marrakesh-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_marrakesh-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_mocha-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_mocha-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_mocha-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_mocha-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_mocha-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_mocha-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_monokai-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_monokai-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_monokai-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_monokai-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_monokai-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_monokai-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_ocean-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_ocean-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_ocean-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_ocean-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_ocean-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_ocean-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_paraiso-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_paraiso-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_paraiso-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_paraiso-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_paraiso-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_paraiso-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_railscasts-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_railscasts-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_railscasts-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_railscasts-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_railscasts-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_railscasts-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_shapeshifter-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_shapeshifter-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_shapeshifter-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_shapeshifter-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_shapeshifter-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_shapeshifter-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_solarized-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_solarized-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_solarized-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_solarized-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_solarized-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_solarized-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_tomorrow-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_tomorrow-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_tomorrow-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_tomorrow-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_tomorrow-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_tomorrow-light/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_twilight-dark/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_twilight-dark/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_twilight-dark/ipython_nbconvert_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_twilight-light/ipython_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_twilight-light/ipython_notebook_config.py&apos;
[ProfileCreate] Generating default config file: u&apos;/home/damian/.ipython/profile_twilight-light/ipython_nbconvert_config.py&apos;

</pre>
</div>
</div>

</div>
</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Now, I want to try it... quickly... so I launch a new <strong>IPython</strong> server for each <em>profile</em> in specific <em>ports</em>. I also pass the <code>--no-browser</code> option to avoid opening 48 tabs in a row (depending of your computing power this can be problematic).</p>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">
In&nbsp;[4]:
</div>
<div class="inner_cell">
<div class="input_area">
<div class="highlight"><pre><span class="k">for</span> <span class="n">i</span><span class="p">,</span> <span class="n">name</span> <span class="ow">in</span> <span class="nb">enumerate</span><span class="p">(</span><span class="n">theme_names</span><span class="p">):</span>
    <span class="n">port</span> <span class="o">=</span> <span class="nb">str</span><span class="p">(</span><span class="mi">9000</span> <span class="o">+</span> <span class="n">i</span><span class="p">)</span> 
    <span class="n">subprocess</span><span class="o">.</span><span class="n">Popen</span><span class="p">([</span><span class="s">&quot;ipython&quot;</span><span class="p">,</span> <span class="s">&quot;notebook&quot;</span><span class="p">,</span> <span class="s">&quot;--profile=&quot;</span> <span class="o">+</span> <span class="n">name</span><span class="p">,</span> <span class="s">&quot;--port=&quot;</span> <span class="o">+</span> <span class="n">port</span><span class="p">,</span> <span class="s">&quot;--no-browser&quot;</span><span class="p">])</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
&nbsp;&nbsp;Click me to hide the output, if the is one ;-)</i>
</div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Finally, because I am lazy ;-), I build the urls to see this same notebook with each different theme (don&#39;t forget to use the <em>incognito mode</em> of your browser to avoid <code>css</code> caching and at least <strong>IPython 2.0</strong>).</p>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">
In&nbsp;[5]:
</div>
<div class="inner_cell">
<div class="input_area">
<div class="highlight"><pre><span class="n">base_url</span> <span class="o">=</span> <span class="s">&quot;http://127.0.0.1:&quot;</span>
<span class="n">notebook</span> <span class="o">=</span> <span class="s">&quot;/notebooks/48-themes-for-your-ipython-notebook.ipynb&quot;</span>

<span class="k">for</span> <span class="n">i</span><span class="p">,</span> <span class="n">name</span> <span class="ow">in</span> <span class="nb">enumerate</span><span class="p">(</span><span class="n">theme_names</span><span class="p">):</span>
    <span class="n">port</span> <span class="o">=</span> <span class="nb">str</span><span class="p">(</span><span class="mi">9000</span> <span class="o">+</span> <span class="n">i</span><span class="p">)</span> 
    <span class="n">url</span> <span class="o">=</span> <span class="n">base_url</span> <span class="o">+</span> <span class="n">port</span> <span class="o">+</span> <span class="n">notebook</span>
    <span class="k">print</span> <span class="n">url</span><span class="p">,</span> <span class="n">name</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
&nbsp;&nbsp;Click me to hide the output, if the is one ;-)</i>
</div>
</div>
</div>

<div class="output_wrapper output_hidden">
<div class="output">

<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt"></div>
<div class="output_subarea output_stream output_stdout output_text">
<pre>
http://127.0.0.1:9000/notebooks/48-themes-for-your-ipython-notebook.ipynb 3024-dark
http://127.0.0.1:9001/notebooks/48-themes-for-your-ipython-notebook.ipynb 3024-light
http://127.0.0.1:9002/notebooks/48-themes-for-your-ipython-notebook.ipynb atelierdune-dark
http://127.0.0.1:9003/notebooks/48-themes-for-your-ipython-notebook.ipynb atelierdune-light
http://127.0.0.1:9004/notebooks/48-themes-for-your-ipython-notebook.ipynb atelierforest-dark
http://127.0.0.1:9005/notebooks/48-themes-for-your-ipython-notebook.ipynb atelierforest-light
http://127.0.0.1:9006/notebooks/48-themes-for-your-ipython-notebook.ipynb atelierheath-dark
http://127.0.0.1:9007/notebooks/48-themes-for-your-ipython-notebook.ipynb atelierheath-light
http://127.0.0.1:9008/notebooks/48-themes-for-your-ipython-notebook.ipynb atelierlakeside-dark
http://127.0.0.1:9009/notebooks/48-themes-for-your-ipython-notebook.ipynb atelierlakeside-light
http://127.0.0.1:9010/notebooks/48-themes-for-your-ipython-notebook.ipynb atelierseaside-dark
http://127.0.0.1:9011/notebooks/48-themes-for-your-ipython-notebook.ipynb atelierseaside-light
http://127.0.0.1:9012/notebooks/48-themes-for-your-ipython-notebook.ipynb bespin-dark
http://127.0.0.1:9013/notebooks/48-themes-for-your-ipython-notebook.ipynb bespin-light
http://127.0.0.1:9014/notebooks/48-themes-for-your-ipython-notebook.ipynb chalk-dark
http://127.0.0.1:9015/notebooks/48-themes-for-your-ipython-notebook.ipynb chalk-light
http://127.0.0.1:9016/notebooks/48-themes-for-your-ipython-notebook.ipynb default-dark
http://127.0.0.1:9017/notebooks/48-themes-for-your-ipython-notebook.ipynb default-light
http://127.0.0.1:9018/notebooks/48-themes-for-your-ipython-notebook.ipynb eighties-dark
http://127.0.0.1:9019/notebooks/48-themes-for-your-ipython-notebook.ipynb eighties-light
http://127.0.0.1:9020/notebooks/48-themes-for-your-ipython-notebook.ipynb grayscale-dark
http://127.0.0.1:9021/notebooks/48-themes-for-your-ipython-notebook.ipynb grayscale-light
http://127.0.0.1:9022/notebooks/48-themes-for-your-ipython-notebook.ipynb greenscreen-dark
http://127.0.0.1:9023/notebooks/48-themes-for-your-ipython-notebook.ipynb greenscreen-light
http://127.0.0.1:9024/notebooks/48-themes-for-your-ipython-notebook.ipynb isotope-dark
http://127.0.0.1:9025/notebooks/48-themes-for-your-ipython-notebook.ipynb isotope-light
http://127.0.0.1:9026/notebooks/48-themes-for-your-ipython-notebook.ipynb londontube-dark
http://127.0.0.1:9027/notebooks/48-themes-for-your-ipython-notebook.ipynb londontube-light
http://127.0.0.1:9028/notebooks/48-themes-for-your-ipython-notebook.ipynb marrakesh-dark
http://127.0.0.1:9029/notebooks/48-themes-for-your-ipython-notebook.ipynb marrakesh-light
http://127.0.0.1:9030/notebooks/48-themes-for-your-ipython-notebook.ipynb mocha-dark
http://127.0.0.1:9031/notebooks/48-themes-for-your-ipython-notebook.ipynb mocha-light
http://127.0.0.1:9032/notebooks/48-themes-for-your-ipython-notebook.ipynb monokai-dark
http://127.0.0.1:9033/notebooks/48-themes-for-your-ipython-notebook.ipynb monokai-light
http://127.0.0.1:9034/notebooks/48-themes-for-your-ipython-notebook.ipynb ocean-dark
http://127.0.0.1:9035/notebooks/48-themes-for-your-ipython-notebook.ipynb ocean-light
http://127.0.0.1:9036/notebooks/48-themes-for-your-ipython-notebook.ipynb paraiso-dark
http://127.0.0.1:9037/notebooks/48-themes-for-your-ipython-notebook.ipynb paraiso-light
http://127.0.0.1:9038/notebooks/48-themes-for-your-ipython-notebook.ipynb railscasts-dark
http://127.0.0.1:9039/notebooks/48-themes-for-your-ipython-notebook.ipynb railscasts-light
http://127.0.0.1:9040/notebooks/48-themes-for-your-ipython-notebook.ipynb shapeshifter-dark
http://127.0.0.1:9041/notebooks/48-themes-for-your-ipython-notebook.ipynb shapeshifter-light
http://127.0.0.1:9042/notebooks/48-themes-for-your-ipython-notebook.ipynb solarized-dark
http://127.0.0.1:9043/notebooks/48-themes-for-your-ipython-notebook.ipynb solarized-light
http://127.0.0.1:9044/notebooks/48-themes-for-your-ipython-notebook.ipynb tomorrow-dark
http://127.0.0.1:9045/notebooks/48-themes-for-your-ipython-notebook.ipynb tomorrow-light
http://127.0.0.1:9046/notebooks/48-themes-for-your-ipython-notebook.ipynb twilight-dark
http://127.0.0.1:9047/notebooks/48-themes-for-your-ipython-notebook.ipynb twilight-light

</pre>
</div>
</div>

</div>
</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Easy and quick, don&#39;t you think?</p>
<p>OK, a lot of <strong>IPython</strong> servers opened, let&#39;s kill them all!!! I feel like <a href="http://en.wikipedia.org/wiki/George_R._R._Martin">George R. R. Martin</a> ;-).</p>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">
In&nbsp;[]:
</div>
<div class="inner_cell">
<div class="input_area">
<div class="highlight"><pre><span class="o">!</span>killall -9 ipython
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
&nbsp;&nbsp;Click me to hide the output, if the is one ;-)</i>
</div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Obviously, this command also killed the <em>current</em> notebook (remember, this post is in fact an <strong>IPython notebook</strong>, and you can get it from the <strong>source</strong> link at the top of the post)... but I am right with that... this is the end of this post.</p>
<p>Final note: I did not like any <em>complete</em> theme, but I really like some <em>part</em> from several themes, so it worths to see them to take each nice part and make my own theme in the future.</p>
<p>Good weekend!</p>
<p>Damián</p>
</div>
</div>
</div>