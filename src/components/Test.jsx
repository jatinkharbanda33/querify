import React from 'react'

const Test = () => {
  return (
    <div>
        <div className="rounded shadow-sm p-1">
  <div className="grid grid-cols-2">
    <div className="col-span-1 sm:col-span-1">
      <p className="text-base">Input text</p>
      <div className="box-border">
        <div className="box-border">
          <p className="text-base"><span className="text-green-500">0</span><span className="text-red-500">/10,000 </span></p>
        </div>
        <div className="box-border">
          <textarea placeholder="Enter your input text here..." className="text-base"></textarea>
          <div className="box-border">
            <button className="text-base text-primary-500" type="button">
              <div className="grid grid-cols-2">
                <div className="col-span-1"><svg className="h-6 w-6 text-green-500" focusable="false" aria-hidden="true" viewBox="0 0 24 24"></svg></div>
                <div className="col-span-1"><p className="text-base">Paste Text</p></div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="box-border">
        <button className="border border-primary-500 text-base" type="button">Basic Paraphrase</button>
        <p className="text-base"><span className="text-green-500">0</span><span className="text-red-500">/10,000 </span></p>
        <form target="_black" action="https://quillbot.com/">
          <div className="box-border">
            <input type="text" name="utm_source" readOnly value="paraphrasing-tool.com" />
            <input type="text" name="utm_campaign" readOnly value="/" />
            <input type="text" name="utm_medium" readOnly value="extwebp" />
            <input type="text" name="inputKey" readOnly />
            <input type="text" name="initialSynonymsVal" readOnly value="2" />
            <input type="text" name="aff_test_name" readOnly value="PTAdvancedParaphraseCTALinkExperiment-A" />
            <input type="text" name="maxGuestQuill" value="3" />
            <input type="text" name="thesaurusHelpFrequency" value="[2,10,20]" />
          </div>
          <button className="bg-primary-500 text-base" type="submit"><p className="text-base">Advanced Paraphrase</p></button>
        </form>
      </div>
    </div>
    <div className="col-span-1 sm:col-span-1" id="output-container">
      <p className="text-base">Paraphrased text</p>
      <div className="box-border">
        <textarea className="text-base"></textarea>
      </div>
      <div className="box-border"></div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Test;